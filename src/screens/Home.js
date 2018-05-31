import React, { Component } from "react";
import {
  Container,
  Content,
  Header,
  Title,
  Body,
  Text,
  Thumbnail,
  List,
  ListItem,
  View
} from "native-base";
import { StyleSheet } from "react-native";
import { FlatList } from "react-native";
import { connect } from "react-redux";
import { fetchTweets } from "../actions/tweets";

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(fetchTweets());
  }

  renderTweet = item => (
    <View style={styles.Tweet}>
      <View style={styles.TweetHeader}>
        <Thumbnail
          large
          source={{
            uri: item.user.avatar
          }}
        />
        <View style={styles.TweetMaker}>
          <Text style={{ fontSize: 25, fontWeight: "800", padding: 4 }}>
            {item.user.name}
          </Text>
          <Text style={{ fontSize: 14, padding: 4 }}>
            @{item.user.username}
          </Text>
        </View>
      </View>
      <View style={styles.TweetBody}>
        <Text style={{ fontWeight: "100" }}>{item.tweetContent}</Text>
      </View>
    </View>
  );

  render() {
    const renderTweet = !this.props.isFetching ? (
      <FlatList
        data={this.props.tweets}
        renderItem={({ item }) => this.renderTweet(item)}
        keyExtractor={(item, index) => index.toString()}
      />
    ) : null;

    return (
      <Container>
        <Header>
          <Body>
            <Title>Tweets</Title>
          </Body>
        </Header>
        <Content>{renderTweet}</Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  Tweet: {
    paddingHorizontal: 10,
    paddingTop: 20,
    paddingBottom: 10,
    borderBottomColor: "#bbb",
    borderBottomWidth: 1
  },
  TweetHeader: {
    flexDirection: "row"
  },
  TweetMaker: {
    paddingHorizontal: 15
  }
});

const mapStateToProps = state => ({
  isLogin: state.auth.isLogin,
  user: state.auth.user,
  tweets: state.tweet.tweets,
  isFetching: state.tweet.isFetching
});

export default connect(mapStateToProps)(Home);
