import React, { useState } from "react";
import { Input, Col, Alert } from "antd";
import { useHistory } from "react-router-dom";
import SelectLang from "./SelectLang";
import { toTitleCase } from "../../utils.js/toTitleCase";

const { Search } = Input;

function SearchText(props) {
  const history = useHistory();
  const [language, setLanguage] = useState("English");
  const [isSearchEmpty, setisSearchEmpty] = useState(false);
  // keyWord, handleSearch,

  const { setKeyWord } = props;

  let bool = false;
  return (
    <>
      <Col xl={2} lg={2} md={2} sm={0} xs={0}>
        <SelectLang value={language} onChange={(value) => setLanguage(value)} />
      </Col>

      <Col xl={12} lg={12} md={12} sm={24} xs={24}>
        <Search
          style={{ background: "transparent" }}
          type="text"
          placeholder="Search for word"
          // width ="500px"
          required={true}
          size="large"
          onSearch={(value) => {
            if (value) {
              setisSearchEmpty(false);
              history.push(`/search/${language}/${toTitleCase(value)}`);
            } else {
              setisSearchEmpty(true);
            }
          }}
          className="search_style"
          onChange={setKeyWord}
        />

        {isSearchEmpty ? (
          <Alert
            message="Please enter a search term in the search box"
            type="warning"
          />
        ) : null}
      </Col>
    </>
  );
}

export default SearchText;
