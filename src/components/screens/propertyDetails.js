import React, { Component } from 'react';
import {
    View,
    Image,
    ImageBackground,
    Button,
    TouchableOpacity,
    Text,
    ScrollView,
    FlatList,
    StyleSheet,
    ShadowRoot
} from 'react-native';
import { fetchData } from "../../services/index";
import styles from '../styles/homeSearchStyle'


class propertyDetails extends Component {

    static navigationOptions = ({ navigation: { navigate } }) => ({
        title: "Details",
      });

    constructor(props) {
        super(props);
        this.state = {
            propertyDetailsRes: {},
            propertyAttributes: []
        }

    }
    componentDidMount() {
        this.featchSearchResult()
    }

    featchSearchResult = async () => {

        fetchData('https://gist.githubusercontent.com/AnkitDroidGit/5c784fb70122d81905b3531f21c60dba/raw/a99683457221c8bb4fd6c9d16f9b6fc6a33ed8a8/propertyDetails.json')
            .then((respone) => {
                const result = respone.data
                console.log(" RESPONSE Details: ", result)
                this.setState({ propertyDetailsRes: result })
                this.setState({
                    propertyAttributes:
                        [{
                            'landTitleType': this.state.propertyDetailsRes.attributes.landTitleType,
                            'tenure': this.state.propertyDetailsRes.attributes.tenure,
                            'builtUp': this.state.propertyDetailsRes.attributes.builtUp,
                            'updatedAt': this.state.propertyDetailsRes.updatedAt,
                            'id': 1
                        }]
                })

                console.log(" RESPONSE: ", this.state.propertyDetailsRes.cover.thumbnailUrl)
            })
            .catch((err) => {
                console.log(" ERROR: ", err.message);
            })
    }

    render() {
        return (
            <View>

                <ScrollView>
                    <Image style={{ width: 600, height: 300 }}
                        source={{ uri: this.state.propertyDetailsRes.cover != null ? this.state.propertyDetailsRes.cover.thumbnailUrl : "" }} />
                    <View style={styles.container}>
                        <Text style={styles.boldTextStyle}>{this.state.propertyDetailsRes.prices == null ? ""
                            : "RM " + this.state.propertyDetailsRes.prices[0].min}</Text>
                        <Text style={styles.boldTextStyle}>{this.state.propertyDetailsRes.title}</Text>
                        <Text style={styles.addressStyle}>{this.state.propertyDetailsRes.address == null ? "" : this.state.propertyDetailsRes.address.formattedAddress}</Text>
                        <Text>{this.state.propertyDetailsRes.propertyType}</Text>
                        <Text>Built-up Size: {this.state.propertyDetailsRes.attributes == null ? "" : this.state.propertyDetailsRes.attributes.builtUp + " " + this.state.propertyDetailsRes.attributes.sizeUnit}</Text>
                        <View style={ShadowRoot}>
                            <Text style={styles.boldTextStyle}>Property Information</Text>
                            {
                                this.state.propertyAttributes.map((item, index) => (
                                    <View key={item.id} style={styles.attrContainer}>
                                        <View style={styles.attrItem}><Text>Land Property Type </Text></View>
                                        <View style={styles.attrItem}><Text>{item.landTitleType}</Text></View>

                                        <View style={styles.attrItem}><Text>Tennue</Text></View>
                                        <View style={styles.attrItem}><Text>{item.tenure}</Text></View>

                                        <View style={styles.attrItem}><Text>Land Area</Text></View>
                                        <View style={styles.attrItem}><Text>{item.builtUp}</Text></View>

                                        <View style={styles.attrItem}><Text>Posted Date</Text></View>
                                        <View style={styles.attrItem}><Text>12/03/1990</Text></View>
                                    </View>
                                ))
                            }

                            <Text style={styles.moreDetails}>More Details</Text>
                        </View>

                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default propertyDetails
