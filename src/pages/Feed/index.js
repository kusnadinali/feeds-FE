import React,{ useEffect, useState } from 'react'
import axios from 'axios'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Postingan from '../Postingan'

const Feed = () => {
  const [dataPostingan,setDataPostingan] = useState([]);
  const[jumlahDB,setJumlahDB] = useState(0);
  useEffect(() => {
    getData();
  },[]);
  const getData=()=>{
    axios.get('https://617d57c31eadc50017136488.mockapi.io/postingan')
    .then(res => {
        console.log('res:',res);
        // console.log('jumlah : ',Object.keys(res.data).length);
        setJumlahDB(Object.keys(res.data).length);
        setDataPostingan(res.data);
    })
}
    return (
        <View style={{backgroundColor:'#E3E1E1',height:541}}>
          <ScrollView>
              {dataPostingan.map(user=>{
                return <Postingan 
                 profilImage={user.profile_image} 
                 username={user.username} 
                 postImage={user.post_image}
                 postLike={user.total_like}
                 postComment={user.total_comment}
                 postCaption={user.post_caption} />}
              )}
          </ScrollView> 
        </View>
    )
}

export default Feed;

const styles = StyleSheet.create({})