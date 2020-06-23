import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";

import { AuthContext } from "../../../Auth";

import ProductBullet from "./ProductBullet";

const Container = styled.div`
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px,
    rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;
  text-align: left;
  & table {
    width: 100%;
  }
`;

export default function SendEmailPreview({ state }) {
  const user = useContext(AuthContext);
  const [userName, updateUserName] = useState("");

  useEffect(() => {
    try {
      let firstName = user.currentUser.email.split(".")[0];
      firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
      updateUserName(firstName);
    } catch (e) {
      updateUserName("Your Name");
    }
  }, [user.currentUser.email]);

  return (
    <Container>
      <div>
        <style
          type="text/css"
          dangerouslySetInnerHTML={{
            __html:
              "\n  #PreviewIntercomModal .ic_message_content h1,\n  #PreviewIntercomModal .ic_message_content h2 {\n    color: #0072b0 !important;\n  }\n  #PreviewIntercomModal\n    .ic_message_without_image\n    > .ic_message_internals\n    > .ic_message_content {\n    border-color: #0072b0 !important;\n  }\n  #PreviewIntercomModal .ic_user_comment_body {\n    background-color: #0072b0 !important;\n    border-color: #0072b0 !important;\n  }\n  #PreviewIntercomModal .ic_message_content a {\n    color: #0072b0 !important;\n  }\n  #PreviewIntercomModal .ic_message_content a:hover {\n    color: #0072b0 !important;\n  }\n  #PreviewIntercomModal .ic_user_comment_body {\n    background-color: #0072b0 !important;\n    border-color: #0072b0 !important;\n  }\n  .intercom-h2b-button br {\n    display: none;\n  }\n",
          }}
        />
        <style
          type="text/css"
          data-premailer="ignore"
          dangerouslySetInnerHTML={{
            __html:
              "\n  body {\n    width: 100% !important;\n    -webkit-text-size-adjust: 100%;\n    -ms-text-size-adjust: 100%;\n    margin: 0;\n    padding: 0;\n  }\n\n  .ExternalClass {\n    width: 100%;\n  }\n\n  @media only screen and (max-width: 480px) {\n    br.hidden {\n      display: block !important;\n    }\n    td.padding_cell {\n      display: none !important;\n    }\n    table.message_footer_table td {\n      font-size: 11px !important;\n    }\n  }\n  @media only screen and (max-device-width: 480px) {\n    br.hidden {\n      display: block !important;\n    }\n    td.padding_cell {\n      display: none !important;\n    }\n    table.message_footer_table td {\n      font-size: 11px !important;\n    }\n  }\n",
          }}
        />
        <style
          type="text/css"
          data-premailer="ignore"
          dangerouslySetInnerHTML={{
            __html:
              '\n  /* styles in here will not be inlined. Use for media queries etc */\n  /* force Outlook to provide a "view in browser" menu link. */\n  #outlook a {\n    padding: 0;\n  }\n  /* prevent Webkit and Windows Mobile platforms from changing default font=\n sizes.*/\n  body {\n    width: 100% !important;\n    -webkit-text-size-adjust: 100%;\n    -ms-text-size-adjust: 100%;\n    margin: 0;\n    padding: 0;\n  }\n  /* force Hotmail to display emails at full width */\n  .ExternalClass {\n    width: 100%;\n  }\n  /* force Hotmail to display normal line spacing. http://www.emailonacid.c=\nom/forum/viewthread/43/ */\n  .ExternalClass,\n  .ExternalClass p,\n  .ExternalClass span,\n  .ExternalClass font,\n  .ExternalClass td,\n  .ExternalClass div {\n    line-height: 100%;\n  }\n  /* fix a padding issue on Outlook 07, 10 */\n  table td {\n    border-collapse: collapse;\n  }\n\n  @media only screen and (max-width: 480px) {\n    br.hidden {\n      display: block !important;\n    }\n    td.padding_cell {\n      display: none !important;\n    }\n    table.message_footer_table td {\n      font-size: 11px !important;\n    }\n  }\n  @media only screen and (max-device-width: 480px) {\n    br.hidden {\n      display: block !important;\n    }\n    td.padding_cell {\n      display: none !important;\n    }\n    table.message_footer_table td {\n      font-size: 11px !important;\n    }\n  }\n',
          }}
        />
        <style
          type="text/css"
          dangerouslySetInnerHTML={{
            __html:
              '\n  .admin_name b {\n    color: #6f6f6f;\n  }\n\n  .date_cell a {\n    color: #999999;\n  }\n\n  .comment_header_td {\n    width: 100%;\n    background: #00699a;\n    border: none;\n    font-family: "Helvetica Neue", Arial, sans-serif;\n  }\n\n  .content-td {\n    color: #525252;\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.05);\n    font-family: Helvetica, Arial, sans-serif;\n  }\n\n  .content-td h1 {\n    font-size: 26px;\n    line-height: 33px;\n    color: #282f33;\n    margin-bottom: 7px;\n    margin-top: 30px;\n    font-weight: normal;\n  }\n\n  .content-td h1 a {\n    color: #282f33;\n  }\n\n  .content-td h2 {\n    font-size: 18px;\n    font-weight: bold;\n    color: #282f33;\n    margin: 30px 0 7px;\n  }\n\n  .content-td h2 a {\n    color: #282f33;\n  }\n\n  .content-td h1 + h2 {\n    margin-top: 0 !important;\n  }\n\n  .content-td h2 + h1 {\n    margin-top: 0 !important;\n  }\n\n  .content-td h3,\n  .content-td h4,\n  .content-td h5 {\n    font-size: 16px;\n    font-weight: bold;\n    margin-bottom: 5px;\n  }\n\n  .content-td p {\n    margin: 0 0 17px 0;\n    line-height: 1.5;\n  }\n\n  .content-td p img,\n  .content-td h1 img,\n  .content-td h2 img,\n  .content-td li img,\n  .content-td .intercom-h2b-button img {\n    margin: 0;\n    padding: 0;\n  }\n\n  .content-td a {\n    color: #1251ba;\n  }\n\n  .content-td p.intro {\n    font-size: 20px;\n    line-height: 30px;\n  }\n\n  .content-td blockquote {\n    margin: 40px 0;\n    font-style: italic;\n    color: #8c8c8c;\n    font-size: 18px;\n    text-align: center;\n    padding: 0 30px;\n    font-family: Georgia, sans-serif;\n    quotes: none;\n  }\n\n  .content-td blockquote a {\n    color: #8c8c8c;\n  }\n\n  .content-td ul {\n    list-style: disc;\n    margin: 0 0 20px 40px;\n    padding: 0;\n  }\n\n  .content-td ol {\n    list-style: decimal;\n    margin: 0 0 20px 40px;\n    padding: 0;\n  }\n\n  .content-td img {\n    margin: 17px 0;\n    max-width: 100%;\n  }\n\n  .content-td .intercom-container {\n    margin-bottom: 16px;\n  }\n\n  .content-td hr {\n    border: none;\n    border-top: 1px solid #ddd;\n    border-bottom: 0;\n    margin: 50px 30% 50px 30%;\n  }\n\n  /**/\n  .content-td pre {\n    margin: 0 0 10px;\n    padding: 10px;\n    background-color: #f5f5f5;\n    overflow: auto;\n  }\n\n  .content-td pre code {\n    font-family: Courier, monospace;\n    font-size: 14px;\n    line-height: 1.4;\n    white-space: nowrap;\n  }\n\n  table.intercom-container {\n    margin: 17px 0;\n  }\n  table.intercom-container.intercom-align-center {\n    margin-left: auto;\n    margin-right: auto;\n  }\n\n  table.intercom-container td {\n    background-color: #00699a;\n    padding: 12px 35px;\n    border-radius: 3px;\n    font-family: Helvetica, Arial, sans-serif;\n    margin: 0;\n  }\n\n  .content-td .intercom-h2b-button {\n    font-size: 14px;\n    color: #fff;\n    font-weight: bold;\n    display: inline-block;\n    text-decoration: none;\n    background-color: #00699a;\n    border: none !important;\n  }\n\n  a.intercom-h2b-button {\n    background-color: #0e4595;\n    border-radius: 5px;\n    border: 1px solid rgba(0, 0, 0, 0.2);\n    color: #fff;\n    display: inline-block;\n    font-size: 15px;\n    font-weight: bold;\n    min-height: 20px;\n    text-decoration: none;\n  }\n\n  .content-td .intercom-h2b-button:hover {\n    background-color: #007bb4;\n  }\n\n  .message_footer_table .avatar {\n    -ms-interpolation-mode: bicubic;\n    -webkit-background-clip: padding-box;\n    -webkit-border-radius: 20px;\n    background-clip: padding-box;\n    border-radius: 20px;\n    display: inline-block;\n    height: 40px;\n    max-width: 100%;\n    outline: none;\n    text-decoration: none;\n    width: 40px;\n  }\n\n  .powered-by-table .powered-by-text a {\n    font-weight: bold;\n    text-decoration: none;\n    color: #999;\n  }\n\n  .main_wrapper {\n    padding: 0 20px;\n  }\n\n  .margin-arrow {\n    display: none;\n    visibility: hidden;\n    width: 0;\n    height: 0;\n    max-width: 0;\n    max-height: 0;\n    overflow: hidden;\n    opacity: 0;\n  }\n\n  .content-td > :first-child {\n    margin-top: 0;\n    padding-top: 0;\n  }\n',
          }}
        />
        {/* Responsive*/}
        <style
          type="text/css"
          data-premailer="ignore"
          dangerouslySetInnerHTML={{
            __html:
              "\n  @media screen and (max-width: 635px) {\n    .main-wrap {\n      width: 100% !important;\n    }\n  }\n\n  @media screen and (max-width: 480px) {\n    .content-td {\n      padding: 30px 15px !important;\n    }\n    .content-td h1 {\n      margin-bottom: 5px;\n    }\n    .message_footer_table .space {\n      width: 20px !important;\n    }\n\n    .message_footer_table .arrow-wrap {\n      padding-left: 20px !important;\n    }\n\n    .message_footer_table .admin_name b {\n      display: block !important;\n    }\n\n    .main_wrapper {\n      padding: 0;\n    }\n\n    .image-arrow {\n      display: none !important;\n    }\n\n    .margin-arrow {\n      display: table !important;\n      visibility: visible !important;\n      width: 100% !important;\n      height: auto !important;\n      max-width: none !important;\n      max-height: none !important;\n      opacity: 1 !important;\n      overflow: visible !important;\n    }\n\n    .comment_body {\n      border-bottom: 1px solid #ddd !important;\n    }\n\n    .footer-td-wrapper {\n      display: block !important;\n      width: 100% !important;\n      text-align: left !important;\n    }\n    .footer-td-wrapper .date_cell {\n      text-align: left !important;\n      padding: 15px 0 0 20px !important;\n    }\n  }\n",
          }}
        />
        <style
          type="text/css"
          data-premailer="ignore"
          dangerouslySetInnerHTML={{
            __html:
              "\n  .content-td blockquote + * {\n    margin-top: 20px !important;\n  }\n\n  .ExternalClass .content-td h1 {\n    padding: 20px 0 !important;\n  }\n\n  .ExternalClass .content-td h2 {\n    padding: 0 0 5px !important;\n  }\n\n  .ExternalClass .content-td p {\n    padding: 10px 0 !important;\n  }\n\n  .ExternalClass .content-td .intercom-container {\n    padding: 5px 0 !important;\n  }\n\n  .ExternalClass .content-td hr + * {\n    padding-top: 30px !important;\n  }\n\n  .ExternalClass .content-td ol,\n  .ExternalClass .content-td ul {\n    padding: 0 0 20px 40px !important;\n    margin: 0 !important;\n  }\n\n  .ExternalClass .content-td ol li,\n  .ExternalClass .content-td ul li {\n    padding: 3px 0 !important;\n    margin: 0 !important;\n  }\n  .content-td > :first-child {\n    margin-top: 0 !important;\n    padding-top: 0 !important;\n  }\n\n  .ExternalClass .content-td > :first-child {\n    margin-top: 0 !important;\n    padding-top: 0 !important;\n  }\n",
          }}
        />
        <style
          type="text/css"
          dangerouslySetInnerHTML={{
            __html:
              '\n  .intercom-align-right {\n    text-align: right !important;\n  }\n  .intercom-align-center {\n    text-align: center !important;\n  }\n  .intercom-align-left {\n    text-align: left !important;\n  }\n  /* Over-ride for RTL */\n  .right-to-left .intercom-align-right {\n    text-align: left !important;\n  }\n  .right-to-left .intercom-align-left {\n    text-align: right !important;\n  }\n  .right-to-left .intercom-align-left {\n    text-align: right !important;\n  }\n  .right-to-left li {\n    text-align: right !important;\n    direction: rtl;\n  }\n  .right-to-left .intercom-align-left img,\n  .right-to-left .intercom-align-left .intercom-h2b-button {\n    margin-left: 0 !important;\n  }\n  .intercom-attachment,\n  .intercom-attachments,\n  .intercom-attachments td,\n  .intercom-attachments th,\n  .intercom-attachments tr,\n  .intercom-attachments tbody,\n  .intercom-attachments .icon,\n  .intercom-attachments .icon img {\n    border: none !important;\n    box-shadow: none !important;\n    padding: 0 !important;\n    margin: 0 !important;\n  }\n  .intercom-attachments {\n    margin: 10px 0 !important;\n  }\n  .intercom-attachments .icon,\n  .intercom-attachments .icon img {\n    width: 16px !important;\n    height: 16px !important;\n  }\n  .intercom-attachments .icon {\n    padding-right: 5px !important;\n  }\n  .intercom-attachment {\n    display: inline-block !important;\n    margin-bottom: 5px !important;\n  }\n\n  .intercom-interblocks-content-card {\n    width: 334px !important;\n    max-height: 136px !important;\n    max-width: 100% !important;\n    overflow: hidden !important;\n    border-radius: 20px !important;\n    font-size: 16px !important;\n    border: 1px solid #e0e0e0 !important;\n  }\n\n  .intercom-interblocks-link,\n  .intercom-interblocks-article-card {\n    text-decoration: none !important;\n  }\n\n  .intercom-interblocks-article-icon {\n    width: 22.5% !important;\n    height: 136px !important;\n    float: left !important;\n    background-color: #fafafa !important;\n    background-image: url("https://living-spaces-sales-help.intercom-mail.com/assets/article_book-1a595be287f73c0d02f548f513bfc831.png") !important;\n    background-repeat: no-repeat !important;\n    background-size: 32px !important;\n    background-position: center !important;\n  }\n\n  .intercom-interblocks-article-text {\n    width: 77.5% !important;\n    float: right !important;\n    background-color: #fff !important;\n  }\n\n  .intercom-interblocks-link-title,\n  .intercom-interblocks-article-title {\n    color: #519dd4 !important;\n    font-size: 15px !important;\n    margin: 16px 18px 12px !important;\n    line-height: 1.3em !important;\n    overflow: hidden !important;\n  }\n\n  .intercom-interblocks-link-description,\n  .intercom-interblocks-article-body {\n    margin: 0 18px 12px !important;\n    font-size: 14px !important;\n    color: #65757c !important;\n    line-height: 1.3em !important;\n  }\n\n  .intercom-interblocks-link-author,\n  .intercom-interblocks-article-author {\n    margin: 10px 15px !important;\n    height: 24px !important;\n    line-height: normal !important;\n  }\n\n  .intercom-interblocks-link-author-avatar,\n  .intercom-interblocks-article-author-avatar {\n    width: 16px !important;\n    height: 16px !important;\n    display: inline-block !important;\n    vertical-align: middle !important;\n    float: left;\n    margin-right: 5px;\n  }\n\n  .intercom-interblocks-link-author-avatar-image,\n  .intercom-interblocks-article-author-avatar-image {\n    width: 16px !important;\n    height: 16px !important;\n    border-radius: 50% !important;\n    margin: 0 !important;\n    vertical-align: top !important;\n    font-size: 12px !important;\n  }\n\n  .intercom-interblocks-link-author-name,\n  .intercom-interblocks-article-author-name {\n    color: #74848b !important;\n    margin: 0 0 0 5px !important;\n    font-size: 12px !important;\n    font-weight: 500 !important;\n    overflow: hidden !important;\n  }\n\n  .intercom-interblocks-article-written-by {\n    color: #8897a4 !important;\n    margin: 1px 0 0 5px !important;\n    font-size: 12px !important;\n    overflow: hidden !important;\n    vertical-align: middle !important;\n    float: left !important;\n  }\n',
          }}
        />
        <table
          cellPadding={0}
          cellSpacing={0}
          className="bgtc personal"
          style={{
            backgroundColor: "#f9f9f9",
            borderCollapse: "collapse",
            lineHeight: "100% !important",
            margin: 0,
            padding: 0,
            width: "100% !important",
          }}
        >
          <tbody>
            <tr>
              <td>
                {/*[if (gte mso 10)]>
      <tr>
      <td>
      <table style="width: 600px">
    <![endif]*/}
                <table
                  style={{
                    borderCollapse: "collapse",
                    margin: "auto",
                    maxWidth: "635px",
                    minWidth: "320px",
                    width: "100%",
                  }}
                  className="main-wrap"
                >
                  <tbody>
                    <tr>
                      <td valign="top">
                        <table
                          cellPadding={0}
                          cellSpacing={0}
                          className="reply_header_table"
                          style={{
                            borderCollapse: "collapse",
                            color: "#c0c0c0",
                            fontFamily: '"Helvetica Neue", Arial, sans-serif',
                            fontSize: "13px",
                            lineHeight: "26px",
                            margin: "0 auto 26px",
                            width: "100%",
                          }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td
                        valign="top"
                        className="main_wrapper"
                        style={{ padding: "0 20px" }}
                      >
                        <table
                          cellPadding={0}
                          cellSpacing={0}
                          className="comment_wrapper_table admin_comment"
                          style={{
                            WebkitBackgroundClip: "padding-box",
                            WebkitBorderRadius: "3px",
                            backgroundClip: "padding-box",
                            borderCollapse: "collapse",
                            borderRadius: "3px",
                            color: "#545454",
                            fontFamily: '"Helvetica Neue", Arial, sans-serif',
                            fontSize: "13px",
                            lineHeight: "20px",
                            margin: "0 auto",
                            width: "100%",
                          }}
                        >
                          <tbody>
                            <tr>
                              <td valign="top" className="comment_wrapper_td">
                                <table
                                  cellPadding={0}
                                  cellSpacing={0}
                                  className="comment_header"
                                  style={{
                                    border: "none",
                                    borderCollapse: "separate",
                                    fontSize: "1px",
                                    height: "2px",
                                    lineHeight: "3px",
                                    width: "100%",
                                  }}
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        valign="top"
                                        className="comment_header_td"
                                        style={{
                                          backgroundColor: "#333",
                                          border: "none",
                                          fontFamily:
                                            '"Helvetica Neue", Arial,                                    sans-serif',
                                          width: "100%",
                                        }}
                                      ></td>
                                    </tr>
                                  </tbody>
                                </table>
                                <table
                                  cellPadding={0}
                                  cellSpacing={0}
                                  className="comment_body"
                                  style={{
                                    WebkitBackgroundClip: "padding-box",
                                    WebkitBorderRadius: "0 0 3px 3px",
                                    backgroundClip: "padding-box",
                                    borderCollapse: "collapse",
                                    borderColor: "#dddddd",
                                    borderRadius: "0 0 3px 3px",
                                    borderStyle: "solid solid none",
                                    borderWidth: "0 1px 1px",
                                    width: "100%",
                                  }}
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        className="comment_body_td content-td"
                                        style={{
                                          WebkitBackgroundClip: "padding-box",
                                          WebkitBorderRadius: "0 0 3px 3px",
                                          backgroundClip: "padding-box",
                                          backgroundColor: "white",
                                          borderRadius: "0 0 3px 3px",
                                          boxShadow:
                                            "0 1px 3px 0 rgba(0, 0, 0, 0.05)",
                                          color: "#525252",
                                          fontFamily:
                                            '"Helvetica Neue", Arial,                                    sans-serif',
                                          fontSize: "15px",
                                          lineHeight: "22px",
                                          overflow: "hidden",
                                          padding: "40px 40px 30px",
                                        }}
                                      >
                                        <p
                                          style={{
                                            lineHeight: "1.5",
                                            margin: "0 0 17px",
                                            paddingTop: 0,
                                          }}
                                        >
                                          {state.contactName
                                            ? `${state.contactName},`
                                            : ""}
                                        </p>
                                        <p
                                          style={{
                                            lineHeight: "1.5",
                                            margin: "0 0 17px",
                                          }}
                                        >
                                          {state.message ? state.message : ""}
                                        </p>
                                        <p
                                          style={{
                                            lineHeight: "1.5",
                                            margin: "0 0 17px",
                                          }}
                                        >
                                          Here are the items we looked at today:
                                        </p>
                                        <ul
                                          style={{
                                            listStyleType: "disc",
                                            margin: "0 0 20px 40px",
                                            padding: 0,
                                          }}
                                        >
                                          {state.skus
                                            ? state.skus
                                                .split(",")
                                                .map((sku, i) => (
                                                  <ProductBullet
                                                    key={`pb_${i}`}
                                                    sku={sku}
                                                  />
                                                ))
                                            : ""}
                                        </ul>
                                        <p
                                          style={{
                                            lineHeight: "1.5",
                                            margin: "0 0 17px",
                                          }}
                                        >
                                          Here is a link to the list of items on
                                          our website:{" "}
                                          <a
                                            href={
                                              state.skus
                                                ? `https://www.livingspaces.com/sharelist?pid=${state.skus}`
                                                : "#"
                                            }
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{ color: "#1251ba" }}
                                          >
                                            Shopping List
                                          </a>
                                        </p>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div
                          className="margin-arrow"
                          style={{
                            display: "none",
                            height: 0,
                            maxHeight: 0,
                            maxWidth: 0,
                            opacity: 0,
                            overflow: "hidden",
                            visibility: "hidden",
                            width: 0,
                          }}
                        >
                          <table
                            cellPadding={0}
                            cellSpacing={0}
                            className="message_footer_table margin-arrow"
                            style={{
                              borderCollapse: "collapse",
                              color: "#545454",
                              display: "none",
                              fontFamily: '"Helvetica Neue", Arial, sans-serif',
                              fontSize: "13px",
                              height: 0,
                              lineHeight: "20px",
                              margin: "0 auto",
                              maxHeight: 0,
                              maxWidth: "100%",
                              opacity: 0,
                              overflow: "hidden",
                              visibility: "hidden",
                              width: "100%",
                            }}
                          >
                            <tbody>
                              <tr>
                                <td
                                  valign="top"
                                  width={80}
                                  className="arrow-wrap"
                                  style={{
                                    color: "#272727",
                                    height: "18px",
                                    paddingLeft: "40px",
                                    textAlign: "left",
                                  }}
                                >
                                  <img
                                    alt="Triangle"
                                    className="image_fix"
                                    height={18}
                                    src="https://living-spaces-sales-help.intercom-mail.com/assets/email/personal/triangle-8747882e9ef8882f9bc057241fd3c049.png"
                                    style={{
                                      msInterpolationMode: "bicubic",
                                      display: "inline-block",
                                      marginTop: "-1px",
                                      maxWidth: "100%",
                                      outline: "none",
                                      textDecoration: "none",
                                    }}
                                    width={40}
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="image-arrow">
                          <table
                            cellPadding={0}
                            cellSpacing={0}
                            className="message_footer_table image-arrow"
                            style={{
                              borderCollapse: "collapse",
                              margin: "0 auto",
                              maxWidth: "100%",
                              width: "100%",
                            }}
                          >
                            <tbody>
                              <tr>
                                <td valign="top" width="100%">
                                  <img
                                    alt=""
                                    src="https://living-spaces-sales-help.intercom-mail.com/assets/email/personal/arrow-37f6774809df6fd083bfc98e9d562e23ca6ede618e2b5e10c042de88d2f858dd.png"
                                    style={{ maxWidth: "100%", width: "100%" }}
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <table
                          cellPadding={0}
                          cellSpacing={0}
                          className="message_footer_table"
                          style={{
                            borderCollapse: "collapse",
                            color: "#545454",
                            fontFamily: '"Helvetica Neue", Arial, sans-serif',
                            fontSize: "13px",
                            lineHeight: "20px",
                            margin: "0 auto",
                            maxWidth: "100%",
                            width: "100%",
                          }}
                        >
                          <tbody>
                            <tr />
                          </tbody>
                        </table>
                        <table width="100%" cellPadding={0} cellSpacing={0}>
                          <tbody>
                            <tr>
                              <td width="75%" className="footer-td-wrapper">
                                <table
                                  width="100%"
                                  cellPadding={0}
                                  cellSpacing={0}
                                  style={{
                                    borderCollapse: "collapse",
                                    color: "#545454",
                                    fontFamily:
                                      '"Helvetica Neue", Arial, sans-serif',
                                    fontSize: "13px",
                                    lineHeight: "20px",
                                    margin: "0 auto",
                                    maxWidth: "100%",
                                    width: "100%",
                                  }}
                                  className="message_foot= er_table"
                                >
                                  <tbody>
                                    <tr>
                                      <td width={40} className="space"></td>
                                      <td
                                        valign="middle"
                                        width={50}
                                        style={{ color: "#272727" }}
                                      >
                                        <img
                                          src="/img/demo-avatar.jpg"
                                          height={40}
                                          width={40}
                                          className="avatar"
                                          alt="intercomavatar"
                                          style={{
                                            msInterpolationMode: "bicubic",
                                            WebkitBackgroundClip: "padding-box",
                                            WebkitBorderRadius: "20px",
                                            backgroundClip: "padding-box",
                                            borderRadius: "20px",
                                            display: "inline-block",
                                            height: "40px",
                                            maxWidth: "100%",
                                            outline: "none",
                                            textDecoration: "none",
                                            width: "40px",
                                          }}
                                        />
                                      </td>
                                      <td
                                        className="admin_name"
                                        style={{ color: "#999= 999" }}
                                      >
                                        <b style={{ color: "#6f6f6f" }}>
                                          {userName}
                                        </b>{" "}
                                        from Living Spaces
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                              <td width="25%" className="footer-td-wrapper">
                                <table
                                  width="100%"
                                  cellPadding={0}
                                  style={{
                                    borderCollapse: "collapse",
                                    color: "#545454",
                                    fontFamily:
                                      '"Helvetica Neue", Arial, sans-serif',
                                    fontSize: "13px",
                                    lineHeight: "20px",
                                    margin: "0 auto",
                                    maxWidth: "100%",
                                    width: "100%",
                                  }}
                                  className="message_footer_table"
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        valign="middle"
                                        className="date_cell"
                                        style={{
                                          color: "#999999",
                                          fontSize: "11px",
                                          textAlign: "right",
                                        }}
                                      ></td>
                                    </tr>
                                    <tr />
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td valign="top" height={20} />
            </tr>
          </tbody>
        </table>
        {/*[if (gte mso 10)]>
            </td>
            </tr>
            </table>
          <![endif]*/}
        {/* tracking? */}
        {/* <img src="https://living-spaces-sales-help.intercom-mail.com/via/o?h=3Db4=
d58bb28e0e1e7dd83df569ef82db8c372d61f9-srwf5q5o_27448371248" width="1" height="1" style="display: block;" alt="intercom">

<img  width="1" height="1" alt="" src="https://living-spaces-sales-help.intercom-mail.com/q/DK1U419KTUFoP36VttY2OA~~/AAAAAQA~/RgRgw4UtPlcIaW50ZXJjb21CCgAfLQDhXlo1qlZSFGpjcHNpbW1vbnNAZ21haWwuY29tWAQAAxRB"> */}
      </div>
    </Container>
  );
}
