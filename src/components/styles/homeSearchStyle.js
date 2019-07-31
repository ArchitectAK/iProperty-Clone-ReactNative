import { StyleSheet } from "react-native";

export default StyleSheet.create({
  baseContainer: {
    flex: 1,
    backgroundColor: "gray"
  },
  headerView: {
    height: "40%",
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start"
  },
  mainview: {
    height: "50%",
    marginLeft: "5%",
    marginRight: "5%",
    backgroundColor: "#FFFFFF",

    borderRadius: 4,
    marginTop: 20
  },

  subContainer: {
    height: "40%",
    width: "100%",
    backgroundColor: "#0082C8"
  },
  logoText: {
    width: "100%",
    height: 28,
    fontSize: 20,
    fontFamily: "Helvetica",
    textAlign: "center",
    color: "white",
    marginTop: 10
  },
  buyTab: {
    height: "100%",
    flex: 1.2,
    flexDirection: "column"
  },
  buyText: {
    fontSize: 22,
    fontFamily: "Helvetica",
    color: "#0280C5",
    marginTop: 7,
    marginLeft: 50
  },
  SellText: {
    fontSize: 22,
    fontFamily: "Helvetica",
    color: "black",
    marginTop: 7,
    marginLeft: 40
  },
  serchText: {
    fontSize: 18,
    fontFamily: "Helvetica",
    color: "black",
    marginTop: 10,
    marginLeft: "40%"
  },

  rentTab: {
    height: "100%",
    flex: 1,
    flexDirection: "column"
  },
  headerSearch: {
    height: "60%",
    width: "100%",
    flexDirection: "row"
  },

  searchbarView: {
    flexDirection: "row",
    height: "54%",
    width: "100%",
    borderTopWidth: 1,
    borderColor: "gray",
    marginTop: 10
  },
  searchBarimage: {
    width: 324,
    height: 50,
    marginTop: 10,
    marginLeft: 0
  },

  searchResultcontainer: {
    flex: 1,
    backgroundColor: "gray"
  },

  // container: {
  //     flex: 1,
  //     marginTop: 1,
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     backgroundColor: '#F5FCFF',
  // },
  h2text: {
    marginTop: 10,
    fontFamily: "Helvetica",
    fontSize: 20,
    fontWeight: "bold"
  },
  flatview: {
    justifyContent: "center",
    paddingTop: 10,
    borderRadius: 2
  },
  name: {
    fontFamily: "Verdana",
    fontSize: 18
  },
  email: {
    color: "red"
  },
  flatListView: {
    flex: 1,
    marginTop: 10,
    marginLeft: "5%",
    marginRight: "5%"
  },
  newsView: {
    height: 250,
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 5
  },

  searchResultStyle: {
    marginBottom: 10,
    height: 350,
    width: "100%",
    backgroundColor: "#ffffff",
    borderRadius: 5
  },

  spaceView: {
    height: 10,
    backgroundColor: "gray",
    marginTop: 10
  },
  loading: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center"
  },
  container: {
    marginTop: "2%",
    marginLeft: "5%",
    marginRight: "5%"
  },
  attrContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start"
  },
  attrItem: {
    width: "50%"
  },
  boldTextStyle: {
    fontWeight: "bold",
    marginTop: "2%",
    marginBottom: "2%"
  },
  addressStyle: {
    marginTop: "2%",
    marginBottom: "2%"
  },
  moreDetails: {
    color: "blue",
    fontWeight: "bold",
    marginTop: "2%",
    marginBottom: "2%"
  },
  advertiserStyle: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap"
  }
});
