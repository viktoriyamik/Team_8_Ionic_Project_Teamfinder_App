import React from 'react';
import { IonContent, IonButtons, IonHeader, IonPage, IonTitle,
   IonMenuButton, IonGrid, IonRow, IonCol, } from '@ionic/react';
import { useParams } from 'react-router';
import './Home.css';

const Home: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>

    <IonHeader>    
      <IonGrid fixed={true}>
        <IonRow>
          <IonCol> 
            <IonTitle>TEAMFINDER</IonTitle>   
          </IonCol>
          <IonCol size="auto">
          <div style={{width: "57px"}}>
               <IonButtons slot="start">
               <IonMenuButton />
               </IonButtons> 
          </div>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonHeader>



    <IonContent className="container">
      <div className="welcome-container">
        <h1>WELCOME</h1>
        <p>Teamfinder is your go-to source for all things football!</p>
      </div>
    </IonContent>

    <IonContent className="container">
      <div className="contact-us-container">
        <h1>CONTACT US</h1>
        <p>Don't hesitate to get in touch if you have any queries or requests.<br /><br />
        Email: team@teamfinder.fi</p>
      </div>
    </IonContent>

    </IonPage>
  );
};


export default Home;
