import React from "react";
class AboutClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      setInfo: {
        name: "ani",
        bio: "wano",
        avatar_url:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1280px-Image_created_with_a_mobile_phone.png",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/ab1nash10");
    const json1 = await data.json();
    this.setState({
      setInfo: json1,
    });
  }
  render() {
    const { name, bio, avatar_url } = this.state.setInfo;
    return (
      <div>
        <h2>{name}</h2>
        <p>{bio}</p>
        <img src={avatar_url} alt="" />
      </div>
    );
  }
}

export default AboutClass;

// https://dummyjson.com/products/1
// https://api.github.com/users/USERNAME
