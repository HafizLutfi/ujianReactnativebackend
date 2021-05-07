import axios from 'axios';
import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  FlatList,
  Picker,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      keyword: '',
      searchby: '',
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axios
      .get(`http://192.168.43.232:8080/backend/`)
      .then(response => {
        // console.log(response.data);
        const data = response.data;
        this.setState({data: data});
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  getDataSearch = () => {
    console.log(this.state.searchby);
    if (this.state.searchby === 'Name') {
      axios
        .get(`http://192.168.43.232:8080/name/${this.state.keyword}`)
        .then(response => {
          // console.log(response.data);
          const data = response.data;
          this.setState({data: data});
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
  renderItem = ({item}) => (
    <View style={{borderWidth: 2, marginLeft: 3, marginRight: 3}}>
      <Text style={{fontSize: 17, marginLeft: 3}}>Nama : {item.nama}</Text>
      <Text style={{fontSize: 17, marginLeft: 3}}>Email : {item.email}</Text>
      <Text style={{fontSize: 17, marginLeft: 3}}>Phone : {item.phone}</Text>
      <Text style={{fontSize: 17, marginLeft: 3}}>
        Address : {item.address}
      </Text>
    </View>
  );

  render() {
    return (
      <SafeAreaView>
        <Text style={{fontSize: 17}}>Search By:</Text>
        <Picker
          style={{borderWidth: 1}}
          selectedValue={this.state.searchby}
          onValueChange={itemValue => this.setState({searchby: itemValue})}>
          <Picker.Item label="Name" value="Name" />
          <Picker.Item label="Email" value="Email" />
          <Picker.Item label="Phone" value="Phone" />
          <Picker.Item label="Address" value="Address" />
        </Picker>
        <Text style={{fontSize: 17}}>Keyword</Text>
        <TextInput style={{borderWidth: 1, marginLeft: 3, marginRight: 3}} />
        <TouchableOpacity
          style={{
            marginTop: 4,
            marginLeft: 300,
            marginRight: 30,
            backgroundColor: 'red',
            alignItems: 'center',
          }}
          onPress={data => {
            this.getDataSearch({keyword: data});
          }}>
          <Text>Search</Text>
        </TouchableOpacity>
        <TextInput />
        <TouchableOpacity>
          <Text>Search</Text>
        </TouchableOpacity>
        <FlatList
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({});
