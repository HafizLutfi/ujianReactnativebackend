import axios from 'axios';
import React, {Component} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  StatusBar,
  Picker,
} from 'react-native';

export class Home extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axios
      .get(`http://192.168.43.232:8080/backend/`)
      .then(response => {
        let data = response.data;
        console.log(response.data);
        this.setState({data: data});
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // getDataBynama = () => {
  //   axios
  //     .get(`http://192.168.43.232:8080/nama/${this.state.cari}`)
  //     .then(response => {
  //       let data = response.data;
  //       this.setState({data: data});
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       console.log(error);
  //     });
  // };

  // getDataByAddres = () => {
  //   axios
  //     .get(`http://192.168.43.232:8080/address/${this.state.cari}`)
  //     .then(response => {
  //       let data = response.data;
  //       this.setState({data: data});
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       console.log(error);
  //     });
  // };

  // getDataByPhone = () => {
  //   axios
  //     .get(`http://192.168.43.232:8080/phone/${this.state.cari}`)
  //     .then(response => {
  //       let data = response.data;
  //       this.setState({data: data});
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       console.log(error);
  //     });
  // };

  // render = ({item}) => {
  //   <View>
  //     <Text>Nama : {item.nama}</Text>
  //     <Text>Email : {item.email}</Text>
  //     <Text>Address : {item.address}</Text>
  //     <Text>Phone : {item.phone}</Text>
  //   </View>;
  // };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }
}
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    marginLeft: 4,
  },
});
