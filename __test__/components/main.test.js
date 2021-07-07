import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import * as reactRedux from "react-redux";
import configureStore from "redux-mock-store";

import { Provider } from "react-redux";
import Main from "../../components/main";

const mockStore = configureStore([]);

afterEach(cleanup);

const movies = {
  currentMovies: [
    {
      id: "909980",
      title: "Become who you are",
      title_episode: null,
      title_uri: "Become-who-you-are",
      title_original: "Become who you are",
      description:
        "Cuando el motor arranca y comienza la carrera, cada piloto tiene una mirada particular.",
      description_large:
        "Sigue la emocionante vida de cuatro pilotos de carreras internacionales: Scott Dixon, Bruno Senna, Memo Rojas y Jules Gounon, dentro y fuera de la pista en este rápido e íntimo documental sobre deportes de motor.",
      short_description: null,
      image_large:
        "https://clarovideocdn9.clarovideo.net/PELICULAS/BECOMEWHOYOUARE/EXPORTACION_WEB/SS/BECOMEWHOYOUAREWHORIZONTAL.jpg?size=675x380",
      image_medium:
        "https://clarovideocdn7.clarovideo.net/PELICULAS/BECOMEWHOYOUARE/EXPORTACION_WEB/SS/BECOMEWHOYOUAREWVERTICAL.jpg?size=200x300",
      image_small:
        "https://clarovideocdn9.clarovideo.net/PELICULAS/BECOMEWHOYOUARE/EXPORTACION_WEB/SS/BECOMEWHOYOUAREWHORIZONTAL.jpg?size=290x163",
      image_still:
        "https://clarovideocdn8.clarovideo.net/PELICULAS/BECOMEWHOYOUARE/EXPORTACION_WEB/STILLS/BECOMEWHOYOUARE-STILL-01.jpg",
      image_background:
        "https://clarovideocdn9.clarovideo.net/PELICULAS/BECOMEWHOYOUARE/EXPORTACION_WEB/CLEAN/BECOMEWHOYOUARE_e-1280x720.jpg",
      url_imagen_t1:
        "https://clarovideocdn0.clarovideo.net/PELICULAS/BECOMEWHOYOUARE/EXPORTACION_WEB/CLEAN/BECOMEWHOYOUAREWVERTICAL.jpg?size=200x300",
      url_imagen_t2:
        "https://clarovideocdn2.clarovideo.net/PELICULAS/BECOMEWHOYOUARE/EXPORTACION_WEB/CLEAN/BECOMEWHOYOUAREWHORIZONTAL.jpg?size=290x163",
      image_base_horizontal:
        "https://clarovideocdn6.clarovideo.net/PELICULAS/BECOMEWHOYOUARE/EXPORTACION_WEB/SS/BECOMEWHOYOUAREWHORIZONTAL.jpg",
      image_base_vertical:
        "https://clarovideocdn4.clarovideo.net/PELICULAS/BECOMEWHOYOUARE/EXPORTACION_WEB/SS/BECOMEWHOYOUAREWVERTICAL.jpg",
      image_base_square:
        "https://clarovideocdn4.clarovideo.net/PELICULAS/BECOMEWHOYOUARE/EXPORTACION_WEB/SS/BECOMEWHOYOUAREWCUADRADO.jpg",
      image_clean_horizontal:
        "https://clarovideocdn9.clarovideo.net/PELICULAS/BECOMEWHOYOUARE/EXPORTACION_WEB/CLEAN/BECOMEWHOYOUAREWHORIZONTAL.jpg",
      image_clean_vertical:
        "https://clarovideocdn7.clarovideo.net/PELICULAS/BECOMEWHOYOUARE/EXPORTACION_WEB/CLEAN/BECOMEWHOYOUAREWVERTICAL.jpg",
      image_clean_square:
        "https://clarovideocdn7.clarovideo.net/PELICULAS/BECOMEWHOYOUARE/EXPORTACION_WEB/CLEAN/BECOMEWHOYOUAREWCUADRADO.jpg",
      image_sprites:
        "https://clarovideocdn0.clarovideo.net/PELICULAS/BECOMEWHOYOUARE/EXPORTACION_WEB/SPRITES/BECOMEWHOYOUARE-SPRITEBAR.jpg",
      image_frames:
        "https://clarovideocdn6.clarovideo.net/PELICULAS/BECOMEWHOYOUARE/EXPORTACION_WEB/SPRITES/BECOMEWHOYOUARE-00h-00m-00s-00f.jpg",
      image_external: null,
      duration: "01:24:00",
      date: "20201222170849",
      year: "2020",
      preview: "true",
      season_number: null,
      episode_number: null,
      format_types: "susc",
      live_enabled: "0",
      live_type: null,
      live_ref: null,
      timeshift: null,
      votes_average: 4.2,
      rating_code: "PG-13",
      proveedor_name: "AMCO",
      proveedor_code: "amco",
      encoder_tecnology: {
        id: null,
        desc: null
      },
      recorder_technology: {
        id: null,
        desc: null
      },
      resource_name: null,
      rollingcreditstime: null,
      rollingcreditstimedb: null,
      is_series: false,
      channel_number: null
    },
    {
      id: "909658",
      title: "La caza. Monteperdido",
      title_episode: "El deshielo",
      title_uri: "La-caza-Monteperdido",
      title_original: "Caza. Monteperdido, La",
      description:
        "Ana y Lucía, dos niñas de 11 años, desaparecen en Monteperdido cuando salen del colegio.",
      description_large:
        "Ana y Lucía, dos niñas de 11 años, desaparecen en Monteperdido, un pueblo del Pirineo oscense, cuando salen del colegio. Cinco años después, una de las niñas reaparece; ha sufrido un accidente de tráfico y está inconsciente. El conductor, muerto.",
      short_description: null,
      image_large:
        "https://clarovideocdn0.clarovideo.net/SERIES/CAZAMONTEPERDIDOLA-01-01-00/EXPORTACION_WEB/SS/CAZAMONTEPERDIDOLA-01-01-00WHORIZONTAL.jpg?size=675x380",
      image_medium:
        "https://clarovideocdn8.clarovideo.net/SERIES/CAZAMONTEPERDIDOLA-01-01-00/EXPORTACION_WEB/SS/CAZAMONTEPERDIDOLA-01-01-00WVERTICAL.jpg?size=200x300",
      image_small:
        "https://clarovideocdn0.clarovideo.net/SERIES/CAZAMONTEPERDIDOLA-01-01-00/EXPORTACION_WEB/SS/CAZAMONTEPERDIDOLA-01-01-00WHORIZONTAL.jpg?size=290x163",
      image_still:
        "https://clarovideocdn2.clarovideo.net/PELICULAS/CAZAMONTEPERDIDOLA-01-01-01/EXPORTACION_WEB/STILLS/CAZAMONTEPERDIDOLA-01-01-01-STILL-01.jpg",
      image_background:
        "https://clarovideocdn0.clarovideo.net/SERIES/CAZAMONTEPERDIDOLA-01-01-00/EXPORTACION_WEB/CLEAN/CAZAMONTEPERDIDOLA-01-01-00_e-1280x720.jpg",
      url_imagen_t1:
        "https://clarovideocdn1.clarovideo.net/SERIES/CAZAMONTEPERDIDOLA-01-01-00/EXPORTACION_WEB/CLEAN/CAZAMONTEPERDIDOLA-01-01-00WVERTICAL.jpg?size=200x300",
      url_imagen_t2:
        "https://clarovideocdn3.clarovideo.net/SERIES/CAZAMONTEPERDIDOLA-01-01-00/EXPORTACION_WEB/CLEAN/CAZAMONTEPERDIDOLA-01-01-00WHORIZONTAL.jpg?size=290x163",
      image_base_horizontal:
        "https://clarovideocdn7.clarovideo.net/SERIES/CAZAMONTEPERDIDOLA-01-01-00/EXPORTACION_WEB/SS/CAZAMONTEPERDIDOLA-01-01-00WHORIZONTAL.jpg",
      image_base_vertical:
        "https://clarovideocdn5.clarovideo.net/SERIES/CAZAMONTEPERDIDOLA-01-01-00/EXPORTACION_WEB/SS/CAZAMONTEPERDIDOLA-01-01-00WVERTICAL.jpg",
      image_base_square:
        "https://clarovideocdn5.clarovideo.net/SERIES/CAZAMONTEPERDIDOLA-01-01-00/EXPORTACION_WEB/SS/CAZAMONTEPERDIDOLA-01-01-00WCUADRADO.jpg",
      image_clean_horizontal:
        "https://clarovideocdn0.clarovideo.net/SERIES/CAZAMONTEPERDIDOLA-01-01-00/EXPORTACION_WEB/CLEAN/CAZAMONTEPERDIDOLA-01-01-00WHORIZONTAL.jpg",
      image_clean_vertical:
        "https://clarovideocdn8.clarovideo.net/SERIES/CAZAMONTEPERDIDOLA-01-01-00/EXPORTACION_WEB/CLEAN/CAZAMONTEPERDIDOLA-01-01-00WVERTICAL.jpg",
      image_clean_square:
        "https://clarovideocdn8.clarovideo.net/SERIES/CAZAMONTEPERDIDOLA-01-01-00/EXPORTACION_WEB/CLEAN/CAZAMONTEPERDIDOLA-01-01-00WCUADRADO.jpg",
      image_sprites:
        "https://clarovideocdn4.clarovideo.net/PELICULAS/CAZAMONTEPERDIDOLA-01-01-01/EXPORTACION_WEB/SPRITES/CAZAMONTEPERDIDOLA-01-01-01-SPRITEBAR.jpg",
      image_frames:
        "https://clarovideocdn0.clarovideo.net/PELICULAS/CAZAMONTEPERDIDOLA-01-01-01/EXPORTACION_WEB/SPRITES/CAZAMONTEPERDIDOLA-01-01-01-00h-00m-00s-00f.jpg",
      image_external: null,
      duration: "01:14:12",
      date: "15/12/2020",
      year: "2019",
      preview: "true",
      season_number: "1",
      episode_number: "1",
      format_types: "susc",
      live_enabled: "0",
      live_type: null,
      live_ref: null,
      timeshift: null,
      votes_average: 4.31,
      rating_code: "PG-13",
      proveedor_name: "AMCO",
      proveedor_code: "amco",
      encoder_tecnology: {
        id: null,
        desc: null
      },
      recorder_technology: {
        id: null,
        desc: null
      },
      resource_name: null,
      rollingcreditstime: null,
      rollingcreditstimedb: null,
      is_series: true,
      channel_number: null
    }
  ]
};

const observe = jest.fn();
const unobserve = jest.fn();

window.IntersectionObserver = jest.fn(() => ({
  observe,
  unobserve
}));

describe("<Main />", () => {
  const useSelectorMock = jest.spyOn(reactRedux, "useSelector");
  useSelectorMock.mockReturnValue(movies.currentMovies);
  let store;

  beforeEach(() => {
    useSelectorMock.mockClear();
  });

  it("Redux state passed in component and render component", async () => {
    store = mockStore({
      currentMovies: null,
      copyCurrentMovies: null,
      selectedMovie: null
    });

    render(
      <Provider store={store}>
        <Main />
      </Provider>
    );

    expect(observe).toHaveBeenCalled();
    expect(screen.getByText("Ismael")).toBeInTheDocument();
    const movies = await screen.findAllByTestId("image");
    expect(movies).toHaveLength(2);
  });
});
