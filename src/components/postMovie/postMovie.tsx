import React, {useState, useEffect} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {moviesService} from '../services/services';
import {useRoute} from '@react-navigation/native';
import {Rating, AirbnbRating} from 'react-native-ratings';
import styles from './postMovieStyle';

interface MovieInfo {
  title: string;
  vote_average: number;
  overview: string;
  backdrop_path: string;
  origin_country: string;
}

const postMovie = () => {
  const route = useRoute();
  const [movie, setMovie] = useState(null);
  const id = route.params.post;

  const getMovie = async () => {
    const result = await fetch(moviesService.getMoviePost + id, {
      headers: {
        'Content-Type': moviesService.type,
        Authorization: moviesService.apiAuthorization,
      },
    });

    return result.json();
  };

  useEffect(() => {
    const getInfoMovie = async () => {
      const movies = await getMovie();
      setMovie(movies);
    };

    getInfoMovie();
  }, []);

  return (
    <View style={styles.PostContent}>
      <ScrollView>
        <View key={movie?.id}>
          <Text style={styles.textPostTitle}>{movie?.title}</Text>

          <View style={styles.imageItem}>
            <Image
              style={styles.imagePost}
              source={{
                uri: `https://www.themoviedb.org/t/p/w220_and_h330_face/${movie?.backdrop_path}`,
              }}
            />
          </View>

          <Text style={styles.textPost}>{movie?.overview}</Text>
          <Text style={styles.textPost}>{movie?.vote_average}</Text>
          <Text style={styles.textPost}>{movie?.origin_country}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default postMovie;
