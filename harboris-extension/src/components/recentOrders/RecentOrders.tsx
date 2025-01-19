import Card from "../layouts/card/Card";
import Section from "../layouts/section/Section";
import handmLogo from "../../assets/h-and-m-logo.svg";
import redShirt from "../../assets/red-shirt.png";
import greySweater from "../../assets/grey-sweater.png";
import blackDress from "../../assets/black-dress.png";
import frontDesk from "../../assets/front-desk.svg";
import mapVillage1 from "../../assets/map-village1.png";

export default function RecentOrders() {
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
          <div
            style={{
              width: "100%",
              marginBottom: "12px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <h3
                style={{
                  margin: "0px",
                  fontWeight: 300,
                  fontSize: "24px",
                }}
              >
                {"H&M"}
              </h3>
              <img
                src={handmLogo}
                style={{
                  aspectRatio: "1/1",
                  borderRadius: "50%",
                  width: "26px",
                }}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <img
              src={redShirt}
              style={{
                aspectRatio: "1/1",
                width: "68px",
                borderRadius: "8px",
                border: "1px solid var(--Style-6, #F0F0F0)",
                background: `url(${redShirt}) lightgray 50% / contain no-repeat, rgba(255, 255, 255, 0.80)`,
              }}
            />
            <img
              src={greySweater}
              style={{
                aspectRatio: "1/1",
                width: "68px",
                borderRadius: "8px",
                border: "1px solid var(--Style-6, #F0F0F0)",
                background: `url(${redShirt}) lightgray 50% / contain no-repeat, rgba(255, 255, 255, 0.80)`,
              }}
            />
            <img
              src={blackDress}
              style={{
                aspectRatio: "1/1",
                width: "68px",
                borderRadius: "8px",
                border: "1px solid var(--Style-6, #F0F0F0)",
                background: `url(${redShirt}) lightgray 50% / contain no-repeat, rgba(255, 255, 255, 0.80)`,
              }}
            />
            <div
              style={{
                display: "flex",
                width: "68px",
                height: "68px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                borderRadius: "100px",
                background: "var(--Style-6, #F0F0F0)",
              }}
            >
              <p
                style={{
                  color: "#717171",
                  textAlign: "center",
                  fontFamily: "Helvetica",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "80%" /* 19.2px */,
                  letterSpacing: "-0.16px",
                  margin: 0,
                }}
              >
                <span
                  style={{
                    display: "block",
                    fontSize: "16px",
                  }}
                >
                  +2
                </span>
                <span
                  style={{
                    fontSize: "11px",
                  }}
                >
                  more
                </span>
              </p>
            </div>
          </div>
          <div
            style={{
              width: "100%",
            }}
          >
            <h4
              style={{
                color: "#000",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "120%" /* 19.2px */,
                margin: "0 0 12px 0",
              }}
            >
              Ships to
            </h4>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
              }}
            >
              <div
                style={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <div>
                  <p
                    style={{
                      color: "#444",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: 100,
                      margin: 0,
                    }}
                  >
                    333 King Street North
                  </p>
                  <p
                    style={{
                      color: "#444",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: 100,
                      margin: 0,
                    }}
                  >
                    Waterloo ON, L6C 2A6
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "12px",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={frontDesk}
                    style={{
                      width: "26px",
                      aspectRatio: "1/1",
                      borderRadius: "50%",
                    }}
                  />
                  <p
                    style={{
                      color: "#444",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: 100,
                      margin: 0,
                    }}
                  >
                    Harbor: Front Desk
                  </p>
                </div>
              </div>
              <img
                src={mapVillage1}
                style={{
                  aspectRatio: "1/1",
                  width: "74px",
                  borderRadius: "8px",
                  border: "1px solid var(--Style-6, #F0F0F0)",
                }}
              />
            </div>
          </div>
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
