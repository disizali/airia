import React, { Component } from "react";
import { Container, Button, Table } from "reactstrap";
import UserContext from "../UserContext";
import axios from "axios";
import { Card } from "reactstrap";
export default class Favorites extends Component {
  static contextType = UserContext;
  constructor(props) {
    super(props);
    this.state = { cigarette: 0, religious: 0, changed: false };
    this.favoriteChangeHandler = this.favoriteChangeHandler.bind(this);
    this.saveFavorites = this.saveFavorites.bind(this);
  }

  favoriteChangeHandler(name) {
    const { user, updateUser } = this.context;
    const newUser = {
      ...user,
      Favorite: { ...user.Favorite, [name]: user.Favorite[name] == 0 ? 1 : 0 }
    };
    updateUser(newUser);
    this.setState({ changed: true });
  }

  saveFavorites() {
    const {
      user: { Favorite: favorite }
    } = this.context;
    axios.put("http://localhost:3001/favorites", { ...favorite });
    this.setState({ changed: false });
  }

  render() {
    const {
      user: {
        Favorite: { smoking, sleeping, camping, walking, allergies }
      }
    } = this.context;

    const { changed } = this.state;
    return (
      <Container className="bg-white rounded w-100 my-3 shadow text-right rtl p-4">
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-column">
            <h5>
              <i className="fal fa-heart text-second mx-2"></i>
              <span className="mx-2 text-second">
                همسفر های خودتون رو با سلیقه خودتون انتخاب کنید
              </span>
            </h5>
            <span className="text-muted">
              با انتخاب علایق شخصی خودتون میتونید با کسایی که با شما شباهت
              بیشتری دارین مسافرت کنید
            </span>
          </div>
          <div>
            <Button
              color={changed ? "warning" : "light"}
              disabled={!changed}
              onClick={this.saveFavorites}
              className={changed ? "text-dark" : "text-muted"}
            >
              <i className="fas fa-save mx-2"></i>
              <span className="mx-2">ذخیره</span>
            </Button>
          </div>
        </div>
        <div>
          <hr />
          <Card
            className={`d-inline-block mx-2 p-2 border rounded shadow favorite-item ${
              smoking ? "bg-second text-dark" : "text-muted"
            }`}
            onClick={() => this.favoriteChangeHandler("smoking")}
          >
            <div className="d-flex flex-column text-center">
              <i className="fas fa-smoking m-1"></i>
              <span className="m-1">اهل سیگار</span>
            </div>
          </Card>
          <Card
            className={`d-inline-block mx-2 p-2 border rounded shadow favorite-item ${
              sleeping ? "bg-second text-dark" : "text-muted"
            }`}
            onClick={() => this.favoriteChangeHandler("sleeping")}
          >
            <div className="d-flex flex-column text-center">
              <i className="fas fa-bed m-1"></i>
              <span className="m-1">اهل خواب</span>
            </div>
          </Card>
          <Card
            className={`d-inline-block mx-2 p-2 border rounded shadow favorite-item ${
              camping ? "bg-second text-dark" : "text-muted"
            }`}
            onClick={() => this.favoriteChangeHandler("camping")}
          >
            <div className="d-flex flex-column text-center">
              <i className="fas fa-campground m-1"></i>
              <span className="m-1">اهل کمپینگ</span>
            </div>
          </Card>
          <Card
            className={`d-inline-block mx-2 p-2 border rounded shadow favorite-item ${
              walking ? "bg-second text-dark" : "text-muted"
            }`}
            onClick={() => this.favoriteChangeHandler("walking")}
          >
            <div className="d-flex flex-column text-center">
              <i className="fas fa-walking m-1"></i>
              <span className="m-1">اهل پیاده روی</span>
            </div>
          </Card>
          <Card
            className={`d-inline-block mx-2 p-2 border rounded shadow favorite-item ${
              allergies ? "bg-second text-dark" : "text-muted"
            }`}
            onClick={() => this.favoriteChangeHandler("allergies")}
          >
            <div className="d-flex flex-column text-center">
              <i className="fas fa-allergies m-1"></i>
              <span className="m-1">حساسیت</span>
            </div>
          </Card>
        </div>
        {/* <Table responsive striped className="rounded my-3">
          <tbody>
            <tr>
              <td>
                <span className="text-dark">سیگاری</span>
              </td>
              <td>
                <Button
                  className="p-2 mx-2"
                  name="religious-0"
                  onClick={this.favoriteChangeHandler}
                  color={religious == 0 ? "warning" : "light"}
                >
                  علاقه ای به گفتنش ندارم
                </Button>
                <Button
                  className="p-2 mx-2"
                  name="religious-1"
                  onClick={this.favoriteChangeHandler}
                  color={religious == 1 ? "warning" : "light"}
                >
                  هستم
                </Button>
                <Button
                  className="p-2 mx-2"
                  name="religious-2"
                  onClick={this.favoriteChangeHandler}
                  color={religious == 2 ? "warning" : "light"}
                >
                  نیستم
                </Button>
              </td>
            </tr>
            <tr>
              <td>
                <span className="text-dark">مذهبی</span>
              </td>
              <td>
                <Button
                  className="p-2 mx-2"
                  name="cigarette-0"
                  onClick={this.favoriteChangeHandler}
                  color={cigarette == 0 ? "warning" : "light"}
                >
                  علاقه ای به گفتنش ندارم
                </Button>
                <Button
                  className="p-2 mx-2"
                  name="cigarette-1"
                  onClick={this.favoriteChangeHandler}
                  color={cigarette == 1 ? "warning" : "light"}
                >
                  هستم
                </Button>
                <Button
                  className="p-2 mx-2"
                  name="cigarette-2"
                  onClick={this.favoriteChangeHandler}
                  color={cigarette == 2 ? "warning" : "light"}
                >
                  نیستم
                </Button>
              </td>
            </tr>
          </tbody>
        </Table> */}
      </Container>
    );
  }
}
