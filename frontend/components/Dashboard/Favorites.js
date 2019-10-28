import React, { Component } from "react";
import { Container, Button, Table } from "reactstrap";
export default class Favorites extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container className="bg-white rounded w-100 my-3 shadow text-right rtl p-4">
        <div className="d-flex flex-column">
          <h5>
            <i className="fal fa-heart text-second mx-2"></i>
            <span className="mx-2 text-second">
              همسفر های خودتون رو با سلیقه خودتون انتخاب کنید
            </span>
          </h5>
            <span className="text-muted">با انتخاب علایق شخصی خودتون میتونید با کسایی که با شما شباهت بیشتری دارین مسافرت کنید</span>
        </div>
        <Table responsive striped className="rounded my-3">
          <tbody>
            <tr>
              <td>
                <span className="text-dark">سیگاری</span>
              </td>
              <td>
                <Button className="p-2 mx-2" color="light">
                  علاقه ای به گفتنش ندارم
                </Button>
                <Button className="p-2 mx-2" color="warning">
                  هستم
                </Button>
                <Button className="p-2 mx-2" color="light">
                  نیستم
                </Button>
              </td>
            </tr>
            <tr>
              <td>
                <span className="text-dark">مذهبی</span>
              </td>
              <td>
                <Button className="p-2 mx-2" color="light">
                  علاقه ای به گفتنش ندارم
                </Button>
                <Button className="p-2 mx-2" color="light">
                  هستم
                </Button>
                <Button className="p-2 mx-2" color="warning">
                  نیستم
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    );
  }
}
