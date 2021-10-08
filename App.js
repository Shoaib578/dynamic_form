import React from 'react'
import {View,Text,TextInput,Dimensions, TouchableOpacity,} from 'react-native'
import {Picker} from '@react-native-picker/picker'
import { RadioButton } from 'react-native-paper';

const data = [
    {
          "element_type": "text",
          "element_value": "First name",
          "element_id": "lbl_fname",
          "is_required": true,
          "validation_scheme": ""
      },
      {
          "element_type": "textinput",
          "element_value": "",
          "element_id": "text_fname",
          "is_required": true,
          "validation_scheme": ""
      },
 
      {
          "element_type": "text",
          "element_value": "Last name",
          "element_id": "lbl_lname",
          "is_required": true,
          "validation_scheme": ""
      },
      {
          "element_type": "dropdown",
          "element_value": ["text", "type"],
          "element_id": "textfname",
          "is_required": true,
          "validation_scheme": ""
      },
 
    {
          "element_type": "radio",
          "element_value": "is_approved",
          "element_id": "lbl_is_approved",
          "is_required": true,
          "validation_scheme": ""
      },
      {
          "element_type": "radio",
          "element_value": "",
          "element_id": "text_is_approved",
          "is_required": true,
          "validation_scheme": ""
      }
  ,
  {
      "element_type": "button",
      "element_value": "Submit",
      "element_id": "lbl_Submit",
      "is_required": true,
      "validation_scheme": ""
  }
]
export default class App extends React.Component{
 state = {
   select_value:'',
   radio_1:'',
   radio_2:'',
   text_input:'',

   is_submit:false
 }

 SubmitForm = ()=>{
   this.setState({is_submit:true})
 }
  render(){
    return(
      <View style={{flex:1,padding:10}}>
        {
          data.map(item=>{
            if(item.element_type == "text"){
              return <Text style={{color:'black',fontSize:20}} key={item.element_id}>{item.element_value}</Text>
              
            }else if(item.element_type == 'textinput'){

             return  <View> 
               <TextInput key={item.element_id} onChangeText={(val)=>this.setState({text_input:val})} placeholderTextColor="white" placeholder={item.element_value} placeholderTextColor='white' style={{width:Dimensions.get('window').width*2/2.5,height:50,borderRadius:4,borderColor:'#5EBEBD',borderWidth:.5,marginTop:10,padding:15,color:'white',backgroundColor:'#5EBEBD',fontSize:15}} />
               {this.state.is_submit && item.is_required == true && this.state.text_input.length<1?<Text style={{color:'red'}}>Field is required</Text>:null}

              </View>
            }else if(item.element_type == 'dropdown'){
              return <View key={item.element_id}>
              
              <View style={{width:Dimensions.get('window').width*2/2.5,height:50,borderRadius:4,borderColor:'#5EBEBD',borderWidth:.5,marginTop:10,color:'white',backgroundColor:'#5EBEBD',fontSize:20}}  >
               <Picker selectedValue={this.state.select_value} onValueChange={(itemValue) =>{
                 console.log(itemValue)
               this.setState({select_value:itemValue})

               }
              }  style={{fontSize:120,color:'white'}} >
                            <Picker.Item label={'Select the value'} value=''/>

                            {item.element_value.map(select=>(
                            <Picker.Item label={select} value={select}/>

                            ))}

              
  
              </Picker>

              </View>

              {this.state.is_submit && item.is_required == true && this.state.select_value.length<1?<Text style={{color:'red'}}>Field is required</Text>:null}

              </View>

            }else if(item.element_type == 'radio'){
              if(item.element_id == 'lbl_is_approved')
              { 
              return<View  key={item.element_id} style={{flexDirection:'row',padding:5,marginTop:10}}>
                 <RadioButton  value={item.element_value}
              status={ this.state.radio_1 === 'first' ? 'checked' : 'unchecked' }
              onPress={() => {
                if(this.state.radio_1 == 'first'){
                  this.setState({radio_1:''})

                }else{
                this.setState({radio_1:'first'})

                }
              }}/>
                <Text style={{fontWeight:'bold',fontSize:15}}>{item.element_value}</Text>

              </View>

              }else if(item.element_id == 'text_is_approved'){
                return <View  key={item.element_id} style={{flexDirection:'row',padding:5}}>

                <RadioButton  value={item.element_value}
                status={ this.state.radio_2 === 'first' ? 'checked' : 'unchecked' }
                onPress={() => {
                  if(this.state.radio_2 == 'first'){
                    this.setState({radio_2:''})

                  }else{
                  this.setState({radio_2:'first'})

                  }
                }}/>
                <Text style={{fontWeight:'bold',fontSize:15}}>{item.element_value}</Text>

                </View>
              }
              
            }else if(item.element_type == 'button'){
              return <TouchableOpacity onPress={this.SubmitForm} style={{width:Dimensions.get('window').width*2/2.5,height:50,borderRadius:4,borderColor:'#5EBEBD',borderWidth:.5,marginTop:10,color:'white',backgroundColor:'#5EBEBD',justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:'white',fontSize:20}}>{item.element_value}</Text>
              </TouchableOpacity>
            }
          })
        }
      </View>
    )
  }
}