import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {Header} from 'react-native-elements';
import db from '../config'


export default class WriteStoryScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            author: '',
            story: '',
        }
    }

submitstory = ()=>{
    
}

    render(){
        return(
            <View style={styles.container}>
                <Header 
                    backgroundColor = {'pink'}
                    centerComponent = {{
                        text : 'Bed Time Stories',
                        style : { color: 'white', fontSize: 20}
                    }}
                />
                <TextInput 
                    placeholder="Story Title"
                    onChangeText= {(text)=>{
                        this.setState({
                            title: text
                        })
                    }}
                    value={this.state.title}/>
                <TextInput
                    placeholder="Author"
                    onChangeText= {(text)=>{
                        this.setState({
                            author: text
                        })
                    }}
                    value={this.state.author} />
                <TextInput 
                    placeholder="Write your story"
                    onChangeText= {(text)=>{
                        this.setState({
                            storyText: text
                        })
                    }}
                    value={this.state.storyText}
                    multiline={true}/>
                
                <TouchableOpacity>
                    <Text>Submit</Text>
                </TouchableOpacity>
            </View>
        );
    }
}