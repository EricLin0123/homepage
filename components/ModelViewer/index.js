import { Tick, MTLModel } from "react-3d-viewer";

ModelViewer = () => {
  return (
    <div>
      <MTLModel
        enableZoom={false}
        position={{ x: 0, y: -100, z: 0 }}
        rotation={this.state.rotation}
        texPath="./src/lib/model/"
        mtl="3D_PCB1_2024-02-04.mtl"
        src="3D_PCB1_2024-02-04.obj"
      />
    </div>
  );
};
componentWillMount = () => {
  this.tick.animate = false;
};
componentDidMount = () => {
  this.tick = Tick(() => {
    var { rotation } = this.state;
    rotation.y += 0.005;
    this.setState({ rotation });
  });
};
