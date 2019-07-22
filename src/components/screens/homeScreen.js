import React, { Component } from 'react';
import { View, Image, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { featchNews } from "../../services/index";
import Style from '../styles/homeSearchStyle'


class homeScreen extends Component {

    static navigationOptions = ({ navigation: { navigate } }) => ({
        title: "",
        header: null
    });

    constructor(props) {
        super(props);
        this.state = {
            arr_news: [],
            loading: true,

        }


    }
    componentDidMount() {
        this.featchNews()

    }

    featchNews = async () => {

        console.log('Featch News')

        fetchData('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8e90af43505b4e5c998b731f94bda1bb')
            .then((respone) => {
                const result = respone.data
                console.log(" RESPONSE RECEIVED: ", result)
                this.setState({ arr_news: result.articles, loading: false })

            })
            .catch((err) => {
                console.log(" ERROR: ", err.message);
            })


    }


    render() {

        return (
            <View style={Style.baseContainer}>
                <View style={Style.subContainer}>
                    <Text style={Style.logoText}>{'iProperty.com.my'}</Text>
                    <View style={Style.mainview}>
                        <View style={Style.headerView}>
                            <TouchableOpacity style={Style.buyTab} onPress={() => {
                                console.log('Buy Tab Click ')

                            }}>
                                <Text style={Style.buyText}>
                                    {'Buy'}
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={Style.rentTab} onPress={() => {
                                console.log('Rent Tab Click')
                            }}>
                                <Text style={Style.SellText}>
                                    {'Rent'}
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={Style.headerSearch} onPress={() => {
                            console.log('press me')
                            this.props.navigation.navigate('searchResults')
                        }}>
                            <View style={Style.searchbarView}>

                                <Text style={Style.serchText}>
                                    {'search'}
                                </Text>

                            </View>
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={Style.flatListView}>
                    <FlatList
                        data={this.state.arr_news}
                        renderItem={({ item }) =>
                            <View >
                                <View style={Style.newsView}>
                                    <Image
                                        style={{ width: '100%', height: 200, marginTop: 0, borderTopLeftRadius: 4, borderTopRightRadius: 4 }}
                                        source={{ uri: item.urlToImage == null ? 'data:image/png;base64,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' : item.urlToImage }} />
                                    <Text
                                        numberOfLines={2}
                                    >{item.title}</Text>
                                </View>
                                <View style={Style.spaceView}>
                                </View>
                            </View>

                        }
                    />
                </View>

                {this.state.loading === true ? (

                    <View style={Style.loading}>
                        <ActivityIndicator size='large' color="#0082C8" />
                    </View>


                ) : null}


            </View>
        );
    }
}


export default homeScreen

