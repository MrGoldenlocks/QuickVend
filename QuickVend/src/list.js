import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import "./list.css";
const proxyurl = "https://cors-anywhere.herokuapp.com/";

var arr = [];
var count = 0;

const useDataApi = (initialUrl, initialData) => {
  const [data, setData] = useState(initialData);
  const [url, setUrl] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios.get(proxyurl + url);
        if (count > 0) {
          arr.push(result.data);
          console.log(arr);
        }
        count++;

        setData(result.data);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return [{ data, isLoading, isError }, setUrl];
};

var InputForm = function () {
  const [query, setQuery] = useState("");
  const [{ data, isLoading, isError }, doFetch] = useDataApi("", { hits: [] });

  console.log(data);

  return (
    <Fragment>
      <form
        id="inputForm"
        onSubmit={(event) => {
          doFetch(`http://dnd5eapi.co/api/equipment/${query}`);
          setQuery("");
          event.preventDefault();
        }}
      >
        <input
          id="inputMain"
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {isError && <div>Something went wrong ...</div>}
      <br></br>
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <div id="menu">
          <ul>
            {arr &&
              arr.map((item) => (
                <li key={item.name}>
                  <table>
                    <thead>
                      <tr>
                        <th colSpan="2">{item.name}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Weight:</td>
                        <td>{item.weight}</td>
                      </tr>
                      <tr>
                        <td>Cost:</td>
                        <td>
                          {item.cost.quantity}
                          {item.cost.unit}
                        </td>
                      </tr>
                      {item.equipment_category === "Weapon" && (
                        <tr>
                          <td>Damage:</td>
                          <td>{item.damage.damage_dice}</td>
                        </tr>
                      )}
                      {item.equipment_category === "Weapon" && (
                        <tr>
                          <td>Type:</td>
                          <td>{item.damage.damage_type.name}</td>
                        </tr>
                      )}
                      {item.equipment_category === "Weapon" && (
                        <tr>
                          <td>Range:</td>
                          <td>{item.range.normal}</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </li>
              ))}
          </ul>
        </div>
      )}
    </Fragment>
  );
};

export default InputForm;
