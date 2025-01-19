import Card from "../layouts/card/Card";
import Section from "../layouts/section/Section";
import handmLogo from "../../assets/h-and-m-logo.svg";
import redShirt from "../../assets/red-shirt.png";
import frontDesk from "../../assets/front-desk.svg";
import mapVillage1 from "../../assets/map-village1.png";
import arrowForward from "../../assets/arrow-forward.svg";
import { Link } from "react-router";
import airpods from "../../assets/airpods.png";
import moisturizer from "../../assets/moisturizer.png";
import folder from "../../assets/folder_copy.svg";
import chameleon from "../../assets/chameleon.png";
import brain from "../../assets/brain.png";
import dollarSign from "../../assets/dollar.png";
import pig from "../../assets/piggy.png";
import rbcLogo from "../../assets/rbc-logo.png";

export default function Insights() {
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
          Shopping Security
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
                {"Recently,"}
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
              marginBottom: "36px",
            }}
          >
            <img
              src={redShirt}
              style={{
                aspectRatio: "1/1",
                width: "68px",
                borderRadius: "8px",
                boxSizing: "border-box",
                border: "1px solid var(--Style-6, #F0F0F0)",
                background: `url(${redShirt}) lightgray 50% / contain no-repeat, rgba(255, 255, 255, 0.80)`,
              }}
            />
            <img
              src={airpods}
              style={{
                aspectRatio: "1/1",
                width: "68px",
                borderRadius: "8px",
                boxSizing: "border-box",
                border: "1px solid var(--Style-6, #F0F0F0)",
                background: `url(${redShirt}) lightgray 50% / contain no-repeat, rgba(255, 255, 255, 0.80)`,
              }}
            />
            <img
              src={moisturizer}
              style={{
                aspectRatio: "1/1",
                width: "68px",
                borderRadius: "8px",
                boxSizing: "border-box",
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
                  +1
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
              marginBottom: "36px",
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
              Your monthly shopping security score is:
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
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#fff",
                  fontSize: "24px",
                  width: "68px",
                  height: "68px",
                  borderRadius: "50%",
                  background: "rgba(0, 106, 195, 0.80)",
                  flexShrink: 0,
                }}
              >
                7
              </div>
              <p
                style={{
                  color: "#444",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: 300,
                  margin: 0,
                  paddingLeft: "24px",
                }}
              >
                Overall, your online shopping activity is relatively safe.
                Remember to avoid purchasing through suspicious vendors.
              </p>
            </div>
          </div>
          <Link
            to="/view-order"
            style={{
              display: "flex",
              height: "50px",
              padding: "0px 24px",
              justifyContent: "space-between",
              alignItems: "center",
              alignSelf: "stretch",
              borderRadius: "100px",
              border: "0.5px solid #E1E1E1",
              background: "var(--White, #FFF)",
              textDecoration: "none",
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: "14px",
                fontWeight: 400,
                color: "#000",
              }}
            >
              View Past Scores
            </p>
            <img
              src={arrowForward}
              style={{
                width: "20px",
                height: "20px",
              }}
            />
          </Link>
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
          Habits
        </h2>
        <Card>
          <h3
            style={{
              color: "#000",
              fontSize: "24px",
              fontStyle: "normal",
              fontWeight: 300,
              margin: "0 0 12px 0",
              lineHeight: "120%" /* 28.8px */,
            }}
          >
            Chameleon
          </h3>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              marginBottom: "24px",
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
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  padding: "8px 0 8px 0",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <p
                  style={{
                    color: "#444",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: 300,
                    margin: 0,
                    paddingRight: "32px",
                  }}
                >
                  Based on your recent activity, you are a trend-following
                  shopper.
                </p>
              </div>
            </div>
            <img
              src={chameleon}
              style={{
                aspectRatio: "1/1",
                width: "60px",
                borderRadius: "8px",
                border: "1px solid var(--Style-6, #F0F0F0)",
              }}
            />
          </div>
          <Link
            to="/insights-report"
            style={{
              display: "flex",
              height: "50px",
              padding: "0px 24px",
              justifyContent: "center",
              gap: "12px",
              alignItems: "center",
              alignSelf: "stretch",
              borderRadius: "100px",
              border: "0.5px solid #E1E1E1",
              background: "var(--Black, #000)",
              textDecoration: "none",
              color: "var(--White, #FFF)",
            }}
          >
            <img
              src={folder}
              style={{
                width: "20px",
                height: "20px",
              }}
            />
            <p
              style={{
                margin: 0,
                fontSize: "14px",
                fontWeight: 400,
              }}
            >
              Full Report
            </p>
          </Link>
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
          Learn
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
                {"Modules"}
              </h3>
              <img
                src={rbcLogo}
                style={{
                  height: "26px",
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
              marginBottom: "36px",
            }}
          >
            <img
              src={brain}
              style={{
                aspectRatio: "1/1",
                width: "68px",
                borderRadius: "8px",
                boxSizing: "border-box",
                border: "1px solid var(--Style-6, #F0F0F0)",
                background: `url(${redShirt}) lightgray 50% / contain no-repeat, rgba(255, 255, 255, 0.80)`,
              }}
            />
            <img
              src={dollarSign}
              style={{
                aspectRatio: "1/1",
                width: "68px",
                borderRadius: "8px",
                boxSizing: "border-box",
                border: "1px solid var(--Style-6, #F0F0F0)",
                background: `url(${redShirt}) lightgray 50% / contain no-repeat, rgba(255, 255, 255, 0.80)`,
              }}
            />
            <img
              src={pig}
              style={{
                aspectRatio: "1/1",
                width: "68px",
                borderRadius: "8px",
                boxSizing: "border-box",
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

          <Link
            to="/view-past-scores"
            style={{
              display: "flex",
              height: "50px",
              padding: "0px 24px",
              justifyContent: "space-between",
              alignItems: "center",
              alignSelf: "stretch",
              borderRadius: "100px",
              border: "0.5px solid #E1E1E1",
              background: "var(--White, #FFF)",
              textDecoration: "none",
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: "14px",
                fontWeight: 400,
                color: "#000",
              }}
            >
              Continue learning
            </p>
            <img
              src={arrowForward}
              style={{
                width: "20px",
                height: "20px",
              }}
            />
          </Link>
        </Card>
      </Section>
    </>
  );
}
