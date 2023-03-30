import styles from "@/styles/Home.module.css";
import supabase from "../../supabase";
import { TimePicker } from "@mui/lab";
import robStyles from "@/styles/robsStyles/FlightCard.module.css";
import { AiFillEdit } from "react-icons/ai";
import Link from "next/link";

const FlightCard = ({ flight, onDelete }) => {
  // flight = this.props;
  // const handleDelete = async () => {
  //   const { data, error } = await supabase
  //     .from("flight")
  //     .delete()
  //     .eq("id", flight.id);

  //   if (error) {
  //     console.log(error);
  //   }
  //   if (data) {
  //     console.log(data);
  //     onDelete(flight.id);
  //   }
  // };

  // console.log("spliting two", flight.deparDateTime);
  
  return (
    <>
      <div></div>
      <div className={robStyles.flightCardBox}>
        <div>
          <div className={styles.card}>
            <h3>Flight Id for test: {flight.id}</h3>
            <h3>Departure Origon: {flight.depart}</h3>
            <p>Flight Date & Time: {flight.deparDateTime}</p>
            {/* <p>Flight Date: {flight.depardate}</p> */}

            <p>Arrival time: {flight.arrivetime}</p>

            <p>Arrival Date: {flight.arrivedate}</p>
            <p>Dragon Cost: ${flight.price}</p>
            {/* <div>
              <span>
                <button className={styles.btnStyle}>
                  <Link href={{ pathname: "/EditFlight", state: flight.id }}>
                    Edit
                  </Link>
                </button>
                <button className={styles.btnStyle} onClick={handleDelete}>
                  Delete
                </button>
              </span>
              <Link className={styles.btnStyle} href="/AddFlight">
                Add to bag
              </Link>
            </div> */}
          </div>
        </div>
      </div>
      <div className="main"></div>
    </>
  );
};
export default FlightCard;
