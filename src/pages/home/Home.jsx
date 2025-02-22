import { Contador } from "../../components/Contador/Contador";
import { Header } from "../../components/Header/Header";
import { ToggleMensaje } from "../../components/ToggleMensaje/ToggleMensaje";
import { InputBusqueda } from "../../components/Input/InputBusqueda";


export const Home = () => {
    return (
      <>
        <Header
          color="info"
          title="Bienvenidos a Nuestra App"
          subtitle="Aiuda se nos acabaron las vacaciones :c"
        />

        <h2>Esto es el Home</h2>

        <Contador />
        <ToggleMensaje />
        <div>
          <InputBusqueda />
        </div>
      </>
    );
}