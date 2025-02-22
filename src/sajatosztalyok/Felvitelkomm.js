import React, { Component } from 'react';
import { StyleSheet,Text, TextInput, View,TouchableOpacity } from 'react-native-web';



export default class Felvitelkomm extends Component {
  constructor(props) {
    super(props);
    this.state = {

        nev: '',
        komment:"", 

        
        
    };
  }

felvitel=async ()=>{
    //alert("megnyomva a gomb")

    if (this.state.nev=="" || this.state.komment=="")
    {
      alert("Add meg a nevet és a kommmentet!")
      return
    }
    let bemenet={
      bevitel1:this.state.nev,
      bevitel2:this.state.komment
      
    }

    fetch('http://localhost:8080/kommentfelv',{
      method: "POST",
      body: JSON.stringify(bemenet),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    }
       
   
    )

    

    .then((response) => response.text())
    .then((szoveg) => {

    //alert(szoveg)
     this.props.frissit() 

})
    
}


  render() {
    return (
      <View style = {{}}>
        <View style={{padding: 10, backgroundColor:'#00FF00'}}>

        

            <Text style={{color:'black'}}>
                Név:
            </Text>
          <TextInput
            placeholderTextColor="lightdark"
            style={{backgroundColor:'white', marginBottom:15, borderRadius:10, height:30}}
            placeholder="Add meg a neved:"
            onChangeText={(nev) => this.setState({nev})}
            value={this.state.nev}
          />
  
          <Text style={{color:'black'}}>
                Komment:
            </Text>
          <TextInput
            placeholderTextColor="lightdark"
            style={{backgroundColor:'white', marginBottom:15, borderRadius:10, height:30}}
            placeholder=" Add meg a kommentet:"
            onChangeText={(komment) => this.setState({komment})}
            value={this.state.komment}
          />
           <TouchableOpacity
            onPress={async ()=>this.felvitel()}>
            <View style={styles.gomb}>
              <Text style={styles.gombSzoveg}>Küldés</Text>
            </View>
          </TouchableOpacity> 
  
          </View>
  
      </View>
    );
  }
}

const styles = StyleSheet.create({
    gombSzoveg:{
            textAlign:'center',
            color:'white',
            marginTop:'auto',
            marginBottom:'auto',
            fontSize:25
    },
    gomb:{
            height:45,
            backgroundColor:'black',
            
            width:'45%',
            alignSelf:'center',
            borderRadius:10
    },
});