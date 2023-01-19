import MainWrapper from "../../components/MainWrapper";
import { useState } from "react";
import { View } from "react-native";
import { Text, Searchbar } from "react-native-paper";
import InfoCard from "../../components/InfoCard";
import BookCard from "../../components/BookCard";
import { Picker } from '@react-native-picker/picker';
import styles from "../../styles";

export default function BooksScreen({navigation}) {

    const [searchQuery, setSearchQuery] = useState('');

    const onChangeSearch = query => setSearchQuery(query);
    const onSubmitSearch = () => navigation.navigate('Search result', {search: searchQuery})

    return (
        <MainWrapper title='Hello, Thales!'>
            <InfoCard text1="You have read" text2='21 books' text3='this year' style = {{marginTop: 30}} />
            <Searchbar
                style={{ marginTop: 20 }}
                placeholder="+ Add Books"
                onChangeText={onChangeSearch}
                value={searchQuery}
                onSubmitEditing={onSubmitSearch}
                onIconPress={onSubmitSearch}
            />
            <Text style={[styles.textLarge, { color: 'black', marginTop: 30, marginLeft: 15 }]}>Current books</Text>
            <BookCard style={{ marginTop: 30, marginBottom: 20 }} 
                      image_link = "https://m.media-amazon.com/images/I/51EhcIq9VbL.jpg" title="Eragon"
                      author={"Christopher Paullini"} message1 = "Started in January, 19" message2="466 pages"/>
        </MainWrapper>
    );
}
