import axios from 'axios';
import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  FlatList,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

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
    this.getDataSearch();
  }
  componentDidUpdate() {
    this.getData();
    this.getDataSearch();
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
    console.log(this.state.keyword);
    if (this.state.searchby === 'Name') {
      axios
        .get(`http://192.168.43.232:8080/nama/${this.state.keyword}`)
        .then(response => {
          // console.log(response.data);
          const data = response.data;
          this.setState({data: data});
        })
        .catch(function (error) {
          console.log(error);
        });
    } else if (this.state.searchby === 'Email') {
      axios
        .get(`http://192.168.43.232:8080/email/${this.state.keyword}`)
        .then(response => {
          // console.log(response.data);
          const data = response.data;
          this.setState({data: data});
        })
        .catch(function (error) {
          console.log(error);
        });
    } else if (this.state.searchby === 'Phone') {
      axios
        .get(`http://192.168.43.232:8080/phone/${this.state.keyword}`)
        .then(response => {
          // console.log(response.data);
          const data = response.data;
          this.setState({data: data});
        })
        .catch(function (error) {
          console.log(error);
        });
    } else if (this.state.searchby === 'Address') {
      axios
        .get(`http://192.168.43.232:8080/address/${this.state.keyword}`)
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

  deleteData(id) {
    console.log(id);
    axios
      .delete(`http://192.168.43.232:8080/delete/${id}`)
      .then(response => {
        alert(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  renderItem = ({item}) => (
    <View style={{borderWidth: 2, marginLeft: 3, marginRight: 3}}>
      <Text style={{fontSize: 17, marginLeft: 3}}>Nama : {item.nama}</Text>
      <Text style={{fontSize: 17, marginLeft: 3}}>Email : {item.email}</Text>
      <Text style={{fontSize: 17, marginLeft: 3}}>Phone : {item.phone}</Text>
      <Text style={{fontSize: 17, marginLeft: 3}}>
        Address : {item.address}
      </Text>
      <TouchableOpacity
        style={{
          marginTop: 4,
          marginLeft: 300,
          marginRight: 30,
          backgroundColor: 'green',
          alignItems: 'center',
        }}
        onPress={() => {
          this.props.navigation.navigate('Update', item);
        }}>
        <Text>Update</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginTop: 4,
          marginLeft: 300,
          marginRight: 30,
          backgroundColor: 'red',
          alignItems: 'center',
        }}
        onPress={() => {
          Alert.alert('Anda yakin menhapus data ini?', '', [
            {
              text: 'TIDAK',
              onPress: () => console.warn('NO Pressed'),
              style: 'cancel',
            },
            {text: 'YA', onPress: () => this.deleteData(item.id)},
          ]);
        }}>
        <Text>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  render() {
    return (
      <SafeAreaView>
        <Text style={{fontSize: 17}}>Search By:</Text>
        <RNPickerSelect
          onValueChange={value => this.setState({searchby: value})}
          pickerProps={{style: {height: 40, overflow: 'hidden'}}}
          items={[
            {label: 'Name', value: 'Name'},
            {label: 'Email', value: 'Email'},
            {label: 'Phone', value: 'Phone'},
            {label: 'Address', value: 'Address'},
          ]}
        />
        <Text style={{fontSize: 17}}>Keyword</Text>
        <TextInput
          style={{borderWidth: 1, marginLeft: 3, marginRight: 3}}
          onChangeText={data => this.setState({keyword: data})}
        />
        <TouchableOpacity
          style={{
            marginTop: 4,
            marginLeft: 300,
            marginRight: 30,
            backgroundColor: 'red',
            alignItems: 'center',
          }}
          onPress={value => {
            this.getDataSearch();
          }}>
          <Text>Search</Text>
        </TouchableOpacity>
        <TextInput />
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
