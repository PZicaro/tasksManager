import { SideBar } from '../components/SideBar';
import { Task } from '../components/Task';

import './Home.scss';



export const Home = () => {
    return(
        <div className="home-container">
             <SideBar/>
              <Task/>
        </div>
    )
}