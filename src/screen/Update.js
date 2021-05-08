import axios from 'axios';
import React, {Component} from 'react';
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';

export class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.route.params.id,
      nama: this.props.route.params.nama,
      email: this.props.route.params.email,
      phone: this.props.route.params.phone,
      address: this.props.route.params.address,
    };
  }

  update() {
    axios
      .put(`http://192.168.43.232:8080/update/${this.state.id}`, this.state)
      .then(response => {
        alert(response.data);
        this.props.navigation.navigate('List');
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    console.log(this.state.phone);
    return (
      <View style={{marginTop: 20}}>
        <Text style={styles.text}> Username </Text>
        <TextInput
          value={this.state.nama}
          style={styles.input}
          onChangeText={data => this.setState({nama: data})}
        />
        <Text style={styles.text}> Email </Text>
        <TextInput
          value={this.state.email}
          style={styles.input}
          onChangeText={data => this.setState({email: data})}
        />
        <Text style={styles.text}> Phone </Text>
        <TextInput
          value={String(this.state.phone)}
          style={styles.input}
          onChangeText={data => this.setState({phone: parseInt(data)})}
        />
        <Text style={styles.text}> Address</Text>
        <TextInput
          value={this.state.address}
          style={styles.input}
          onChangeText={data => this.setState({address: data})}
        />
        <Button title="Submit" onPress={this.update.bind(this)} />
      </View>
    );
  }
}

export default Update;

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
