import React, { Component } from 'react';
import {
  View,
  Image,
  ActivityIndicator,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Text
} from 'react-native';
import { fetchData } from "../../services/index";
import homeStyle from '../styles/homeSearchStyle'

class searchResults extends Component {

  static navigationOptions = ({ navigation: { navigate } }) => ({
    title: "Search Results",
  });

  constructor(props) {
    super(props);
    this.state = {
      arraySearchResult: [],
      loading: true,

    }


  }
  componentDidMount() {
    this.featchSearchResult()
  }

  featchSearchResult = async () => {

    fetchData('https://gist.githubusercontent.com/AnkitDroidGit/24db2844429e6a90f1f8f889b6efe987/raw/b5cce14c7e1486129e3a0a35e852cdef0e6e6f25/searchResult.json')
      .then((respone) => {
        const result = respone.data
        console.log(" RESPONSE RECEIVED: ", result)
        this.setState({ arraySearchResult: result.items, loading: false })

      })
      .catch((err) => {
        console.log(" ERROR: ", err.message);
      })
  }

  renderAddress = (item) => {

    let address


   
    if (item !=null && item.title != null) {

      if (item.title.length > 60) {
        address = item.title.toString().substring(0, 60)
      }
      else {
        address = item.title
      }
    }
    else {
      address = ''

    }


    return (
      <Text style={homeStyle.boldTextStyle}
      numberOfLines={1}
      >{address}</Text>

    )

  }

  render() {
    return (

      <View style={homeStyle.searchResultcontainer}>
        <View style={homeStyle.flatListView}>

          <FlatList
            data={this.state.arraySearchResult}
            renderItem={({ item }) => (
              <TouchableOpacity style={homeStyle.searchResultStyle} onPress={() => {
                console.log('press me')
                this.props.navigation.navigate('propertyResults')
              }}>
                <View style={homeStyle.searchResultStyle}>
                  <View>
                    <Image
                      style={{ width: '100%', height: 200, marginTop: 0, borderTopLeftRadius: 4, borderTopRightRadius: 4 }}
                      source={{ uri: item.cover == null ? item.medias[0].thumbnailUrl : item.cover.thumbnailUrl }} />
                    <View style={homeStyle.container}>
                      <Text style={homeStyle.boldTextStyle}>{item.prices == null ? ""
                        : "RM " + item.prices[0].min}</Text>
                      {/* <Text style={homeStyle.boldTextStyle}>{item.title}</Text> */}
                      {
                        this.renderAddress(item)
                      }
                      <Text style={homeStyle.addressStyle}>
                        {item.address == null ? "" : item.address.formattedAddress}</Text>
                      <Text>{item.propertyType}</Text>
                      <Text>Built-up Size: {item.attributes == null ? "" : item.attributes.builtUp + " " + item.attributes.sizeUnit}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            )}

          />
        </View>
        {this.state.loading === true ? (

          <View style={homeStyle.loading}>
            <ActivityIndicator size='large' color="#0082C8" />
          </View>


        ) : null}


      </View>
    );
  }
}




export default searchResults
