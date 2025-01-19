import Card from "../layouts/card/Card";
import Section from "../layouts/section/Section";
import data from "../../data/data.json";
import Company from "../../models/company.model";
import Crate from "../../models/crate.model";

export default function RecentOrders() {
  const unfulfilledOrders: Crate[] = data["crates"].filter(
    (crate) => !crate.fulfilled
  );

  const companies: Company[] = data["companies"];

  return (
    <>
      <Section>
        <h2
          style={{
            color: "#000",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "120%" /* 19.2px */,
            letterSpacing: "-0.16px",
            marginTop: "0px",
            marginBottom: "18px",
          }}
        >
          Recent Orders
        </h2>
        <Card>
          {unfulfilledOrders.map((crate) => (
            <div key={crate.id}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <h3
                  style={{
                    margin: "0px",
                    fontWeight: 500,

                  }}
                >
                  {
                    companies.filter(
                      (company) => company.id === crate.companyId
                    )[0].name
                  }
                </h3>
              </div>
            </div>
          ))}
        </Card>
      </Section>
      <Section>
        <h2
          style={{
            color: "#000",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "120%" /* 19.2px */,
            letterSpacing: "-0.16px",
            marginTop: "0px",
            marginBottom: "18px",
          }}
        >
          Start a New Order
        </h2>
        <Card>ah</Card>
      </Section>
    </>
  );
}
