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
    this.state = {
      item: [],
    };
  }

  componentDidMount() {
    this.getData();
    console.log(this.state.item);
  }

  getData = () => {
    //Make a request for a user with a given ID
    axios
      .get(`http://192.168.43.232:8080/`)
      .then(response => {
        console.log(response.data);
        let data = response.data;
        this.setState({item: data});
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
  },
});
