import React, { Component } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { connect } from "react-redux";
//Components Used
import Logo from "../components/Logo.component";
import Cart from "../components/Cart.component";
import Product from "../components/Product.component";
//Actions used
import { addToCart } from "../redux/actions/cartActions";
import { fetchProducts } from "../redux/actions/productAction";
<script src="http://localhost:8097"></script>
class Products extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Products",
      headerLeft: <Logo navigation={navigation} />,
      headerRight: <Cart navigation={navigation} />
    };
  };
  constructor(props) {
    super(props);
  }

  componentWillMount = () => {
    this.props.fetchProducts();
  };

  addItemsToCart = product => {
    this.props.addToCart(product);
  };

  render() {
    const { products, navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <FlatList
            data={products}
            renderItem={({ item }) => (
              <Product
                item={item}
                addItemsToCart={this.addItemsToCart}
                product={item}
              />
            )}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => (
              <View style={{ height: 0.5, backgroundColor: "#34495e90" }} />
            )}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  body: {
    flex: 1,
    justifyContent: "center"
  }
});
const mapStateToProps = state => ({
  products: state.produts.items
});
const mapDispatchToProps = (dispatch) => ({
  addToCart: () => { dispatch(addToCart())},
  fetchProducts: () => { dispatch(fetchProducts())}
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
  // { addToCart, fetchProducts }
)(Products);
