import axios from "axios";
import React from "react";

export default class EditInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    const id = this.props.match.params.user_id;
    console.log(id);
    axios
      .get("https://fanciful-liger-fbdcd4.netlify.app/health/" + id)
      .then((res) => {
        console.log(res.data);
        this.setState({
          full_name: res.data.full_name,
          temperature: res.data.temperature,
          email: res.data.email,
          phone_number: res.data.phone_number,
        });
      })
      .catch((err) => console.log(err));
    console.log(this.state);
  }
  onChange(e) {
    this.setState({
      [e.target.dataset.name]: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const newData = {
      full_name: this.state.full_name,
      temperature: this.state.temperature,
      email: this.state.email,
      phone_number: this.state.phone_number,
    };
    axios
      .post(
        "https://fanciful-liger-fbdcd4.netlify.app/update/" + this.props.match.params.user_id,
        newData
      )
      .then((res) => {
        window.location = ("/");
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div>
        <form
          onSubmit={this.onSubmit}
          className="form form-control-lg w-100 d-flex flex-column "
        >
          <h2>Update Info</h2>
          <div className="form-group">
            <label>Full name</label>
            <input
              onChange={this.onChange}
              data-name="full_name"
              className="form-control"
              type="name"
              defaultValue={this.state.full_name}
              placeholder="Enter full name"
            />
          </div>
          <label>Email</label>
          <input
            onChange={this.onChange}
            data-name="email"
            className="form-control"
            type="email"
            defaultValue={this.state.email}
            placeholder="example@gmail.com"
          />
          <label>Temperature</label>
          <input
            onChange={this.onChange}
            data-name="temperature"
            className="form-control"
            type="number"
            defaultValue={this.state.temperature}
            placeholder="example@gmail.com"
          />
          <label>Phone/Tel.</label>
          <input
            onChange={this.onChange}
            data-name="phone_number"
            className="form-control"
            type="tel"
            defaultValue={this.state.phone_number}
            placeholder="example@gmail.com"
          />
          <button type="submit" className="btn btn-success m-2">
            UPDATE
          </button>
        </form>
      </div>
    );
  }
}
