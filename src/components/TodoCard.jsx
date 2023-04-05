import { Dimensions, ScrollView, StyleSheet, Text, } from 'react-native'
import React, { useState } from 'react'

const TodoCard = ({todo,setTodo}) => {


    const isCompletedFunk = (idx) => {

        const updateTodo = todo.map((el,index) => {
            if(index == idx){
                return {...el,isCompleted:!el.isCompleted}
            } 
            return el
        })
        setTodo(updateTodo)
        
    }
    

    return (
        <ScrollView style={styles.todoContainer}>
            <Text style={styles.title}>Yapılacaklar {todo.length}</Text>
            {todo.map((item, idx) => (
                <Text onPress={()=>isCompletedFunk(idx)} style={item.isCompleted ? styles.todoText : styles.todoNotText} key={idx}>{item.text}</Text>
            ))}
        </ScrollView>
    )
}

export default TodoCard

const styles = StyleSheet.create({
    todoContainer:{
        width:Dimensions.get('window').width/1.05,
      

    },
    todoText:{
        backgroundColor:'#7DA453',
        color:'#fff',
        height:40,
        borderRadius:6,
        marginBottom:10,
        textAlign:'center',
        lineHeight:40
    },
    todoNotText:{
        backgroundColor:'red',
        color:'#fff',
        height:40,
        borderRadius:6,
        marginBottom:10,
        textAlign:'center',
        lineHeight:40,
        textDecorationLine:'line-through'
    },  
    title:{
        fontSize:35,
        fontWeight:'bold',
        marginBottom:15,
        color:'#ffa500',
        textAlign:'center',
        marginTop:30
      }
})