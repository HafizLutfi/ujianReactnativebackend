import axios from 'axios';
import React, {Component} from 'react';
import {Text, TextInput, View, StyleSheet, Button} from 'react-native';

export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: '',
      email: '',
      phone: 0,
      address: '',
    };
  }

  save() {
    axios
      .post(`http://192.168.43.232:8080/tambah`, this.state)
      .then(response => {
        // console.log(response.data);
        alert(response.data);
        this.props.navigation.navigate('Home');
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    return (
      <View style={{marginTop: 20}}>
        <Text style={styles.text}> Username </Text>
        <TextInput
          style={styles.input}
          onChangeText={data => this.setState({nama: data})}
        />
        <Text style={styles.text}> Email </Text>
        <TextInput
          style={styles.input}
          onChangeText={data => this.setState({email: data})}
        />
        <Text style={styles.text}> Phone </Text>
        <TextInput
          style={styles.input}
          onChangeText={data => this.setState({phone: parseInt(data)})}
        />
        <Text style={styles.text}> Address</Text>
        <TextInput
          style={styles.input}
          onChangeText={data => this.setState({address: data})}
        />
        <Button title="Submit" onPress={this.save.bind(this)} />
      </View>
    );
  }
}

export default Register;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  text: {
    fontSize: 20,
  },
});
