import { Component } from "react";
import { connect } from "react-redux";
import { finishLoading } from "../../../actions";
import { JSONLoader, Mesh } from "three";

class Logo extends Component {
  constructor(props) {
    super(props);

    this.loader = new JSONLoader();
  }

  componentDidMount() {
    let { scene, finishLoading } = this.props;

    this.loader.load("./logo.json", function(geometry, materials) {
      let mesh = new Mesh(geometry, materials[0]);
      mesh.scale.set(5, 5, 5);
      mesh.rotation.y = -(Math.PI / 2);
      mesh.position.y = -12.5;
      mesh.position.x = -11;
      scene.add(mesh);
      finishLoading();
    });
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return null;
  }
}

export default connect(
  null,
  { finishLoading }
)(Logo);
