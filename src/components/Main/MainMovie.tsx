import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {RootState} from '../../store/store';
import {useSelector, useDispatch} from 'react-redux';
import {list, test} from '../../store/slices/movieSlice';
import {moviesService} from '../services/services';
import styles from './movieMain';
import {CommonActions, useNavigation} from '@react-navigation/native';

const postMovie = props => {
  const navigation = useNavigation();
  const [text, onChangeText] = React.useState('');
  const movieList = useSelector((state: RootState) => state.movies.movies);
  const dispatch = useDispatch();

  const getMovies = async () => {
    let l = text ? text : 'a';
    const result = await fetch(moviesService.getMovie + l, {
      headers: {
        'Content-Type': moviesService.type,
        Authorization: moviesService.apiAuthorization,
      },
    });

    return result.json();
  };

  useEffect(() => {
    const listMovies = async () => {
      const movies = await getMovies();
      dispatch(list(movies.results));
    };
    listMovies();
  }, []);
  useEffect(() => {
    const listMovies = async () => {
      const movies = await getMovies();
      dispatch(list(movies.results));
    };
    listMovies();
  }, [text]);

  const detailMovie = id => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'Details',
        params: {
          post: id,
        },
      }),
    );
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.content}
      onPress={() => detailMovie(item.id)}>
      <Image
        style={styles.imageMovie}
        source={{
          uri: `https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}`,
        }}
      />
      <Text style={styles.text}>{item.title}</Text>
    </TouchableOpacity>
  );

  const handleChange = text => {
    onChangeText(text);
  };

  return (
    <View style={styles.parent}>
      <Text>{JSON.stringify(text)}</Text>
      <View style={styles.conatentSearch}>
        <View>
          <Text style={styles.textTitle}>Linemovies</Text>
        </View>
        <TextInput
          style={styles.input}
          onChangeText={handleChange}
          value={text}
        />
      </View>
      <FlatList
        data={movieList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        horizontal={false}
      />
    </View>
  );
};

export default postMovie;
