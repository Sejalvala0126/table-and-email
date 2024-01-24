
import './App.css';

function App() {
  return (
    <div className="App">

      <table>
        <tr>
          <th>Financial Goals</th>
        </tr>

        <tr>
          <td>Buying a house in three month</td>
        </tr>

        <tr>
          <td>Foreign vacation next year</td>
        </tr>

        <tr>
          <td>Child's education in three year</td>
        </tr>


        <tr>
          <td>Buy jewellery for child's marriage in 3 year</td>
        </tr>

        <tr>
          <td>Buy second house in 10 year</td>
        </tr>

        <tr>
          <td>Saving tax</td>
        </tr>

        <tr>
          <td>Retirement</td>
        </tr>

      </table>
      <br />
      <br />
      <br />

      <form>
        <h2>Participant Information</h2><br/>
        <lable for="email">Email: </lable>
        <input type="email" id="email" name="email" />
        <br />
        <br />
        <lable for="name">Name: </lable>
        <input type="text" id="name" name="name" />
        <br />
        <br />
        <input type="checkbox" id="box" name="box" value="box" />
        <lable for="box">Tearms & Conditions</lable>
        <br />
        <br />
        <input className="btn" type="submit" value="Submit"></input>





      </form>




    </div>
  );
}

export default App;
