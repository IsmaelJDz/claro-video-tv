import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import App from "../../components/movieDetails";
import Card from "../../components/card";

afterEach(cleanup);

const observe = jest.fn();
const unobserve = jest.fn();

window.IntersectionObserver = jest.fn(() => ({
  observe,
  unobserve
}));

const props = {
  entry: {
    device_id: "web",
    device_category: "web",
    device_model: "web",
    device_type: "web",
    format: "json",
    device_manufacturer: "generic",
    authpn: "webclient",
    authpt: "tfg1h3j4k6fd7",
    api_version: "v5.86",
    region: "mexico",
    HKS_: "9s5hqq76r3g6sg4jb90l38us52",
    user_id: "22822863",
    group_id: "907348"
  },
  response: {
    group: {
      common: {
        position: 0,
        id: "907348",
        title: "Ben Hur",
        description:
          "Ben Hur apreciará sus valores cuando la vida se torna un desafío constante.",
        large_description:
          "Ben Hur de Judá está destinado a tener muchas vidas: la de un empresario poderoso, la de un esclavo consciente de sus deberes, la de un gladiador, la de un noble romano y, finalmente, la de un héroe victorioso.",
        short_description: null,
        duration: "03:12:51",
        image_large_alt: "Ben Hur",
        image_medium_alt: "Ben Hur",
        image_small_alt: "Ben Hur",
        image_large:
          "https://clarovideocdn9.clarovideo.net/PELICULAS/BENHUR2010/EXPORTACION_WEB/SS/BENHUR2010WHORIZONTAL.jpg?size=675x380",
        image_medium:
          "https://clarovideocdn7.clarovideo.net/PELICULAS/BENHUR2010/EXPORTACION_WEB/SS/BENHUR2010WVERTICAL.jpg?size=200x300",
        image_small:
          "https://clarovideocdn9.clarovideo.net/PELICULAS/BENHUR2010/EXPORTACION_WEB/SS/BENHUR2010WHORIZONTAL.jpg?size=290x163",
        image_still:
          "https://clarovideocdn8.clarovideo.net/PELICULAS/BENHUR2010/EXPORTACION_WEB/STILLS/BENHUR2010-STILL-01.jpg",
        image_background:
          "https://clarovideocdn9.clarovideo.net/PELICULAS/BENHUR2010/EXPORTACION_WEB/CLEAN/BENHUR2010_e-1280x720.jpg",
        image_base_horizontal:
          "https://clarovideocdn6.clarovideo.net/PELICULAS/BENHUR2010/EXPORTACION_WEB/SS/BENHUR2010WHORIZONTAL.jpg",
        image_base_vertical:
          "https://clarovideocdn4.clarovideo.net/PELICULAS/BENHUR2010/EXPORTACION_WEB/SS/BENHUR2010WVERTICAL.jpg",
        image_base_square:
          "https://clarovideocdn4.clarovideo.net/PELICULAS/BENHUR2010/EXPORTACION_WEB/SS/BENHUR2010WCUADRADO.jpg",
        image_clean_horizontal:
          "https://clarovideocdn9.clarovideo.net/PELICULAS/BENHUR2010/EXPORTACION_WEB/CLEAN/BENHUR2010WHORIZONTAL.jpg",
        image_clean_vertical:
          "https://clarovideocdn7.clarovideo.net/PELICULAS/BENHUR2010/EXPORTACION_WEB/CLEAN/BENHUR2010WVERTICAL.jpg",
        image_clean_square:
          "https://clarovideocdn7.clarovideo.net/PELICULAS/BENHUR2010/EXPORTACION_WEB/CLEAN/BENHUR2010WCUADRADO.jpg",
        image_sprites:
          "https://clarovideocdn0.clarovideo.net/PELICULAS/BENHUR2010/EXPORTACION_WEB/SPRITES/BENHUR2010-SPRITEBAR.jpg",
        image_frames:
          "https://clarovideocdn6.clarovideo.net/PELICULAS/BENHUR2010/EXPORTACION_WEB/SPRITES/BENHUR2010-00h-00m-00s-00f.jpg",
        image_external: null,
        date: "26/10/2020",
        media_type: "2",
        title_uri: "Ben-Hur",
        extendedcommon: {
          keywords: {
            keyword: ["5123", "5320", "5421", "5501"]
          },
          genres: {
            genre: [
              {
                id: "51201",
                name: "History",
                desc: "Historia"
              },
              {
                id: "51131",
                name: "Action",
                desc: "Acción"
              },
              {
                id: "51022",
                name: "Adventure",
                desc: "Aventura"
              },
              {
                id: "51105",
                name: "Drama",
                desc: "Drama"
              }
            ]
          },
          roles: {
            role: [
              {
                id: "13617516",
                name: "Actor",
                desc: "Actor",
                talents: {
                  talent: [
                    {
                      id: "131016904",
                      name: "Stephen",
                      surname: "Campbell Moore",
                      fullname: "Campbell Moore, Stephen"
                    },
                    {
                      id: "13627181",
                      name: "Ben",
                      surname: "Cross",
                      fullname: "Cross, Ben"
                    },
                    {
                      id: "36947646",
                      name: "Kristin",
                      surname: "Kreuk",
                      fullname: "Kreuk, Kristin"
                    },
                    {
                      id: "111179759",
                      name: "Joseph",
                      surname: "Morgan",
                      fullname: "Morgan, Joseph"
                    },
                    {
                      id: "13626088",
                      name: "Ray",
                      surname: "Winstone",
                      fullname: "Winstone, Ray"
                    },
                    {
                      id: "23947020",
                      name: "Emily",
                      surname: "VanCamp",
                      fullname: "VanCamp, Emily"
                    }
                  ]
                }
              },
              {
                id: "13617517",
                name: "Director",
                desc: "Director",
                talents: {
                  talent: [
                    {
                      id: "64896466",
                      name: "Steve",
                      surname: "Shill",
                      fullname: "Shill, Steve"
                    }
                  ]
                }
              },
              {
                id: "13965643",
                name: "Writer",
                desc: "Escritor",
                talents: {
                  talent: [
                    {
                      id: "13632816",
                      name: "Alan",
                      surname: "Sharp",
                      fullname: "Sharp, Alan"
                    }
                  ]
                }
              },
              {
                id: "13965645",
                name: "Producer",
                desc: "Productor",
                talents: {
                  talent: [
                    {
                      id: "133075808",
                      name: "Simon",
                      surname: "Vaughan",
                      fullname: "Vaughan, Simon"
                    },
                    {
                      id: "138675948",
                      name: "Michael",
                      surname: "Prupas",
                      fullname: "Prupas, Michael"
                    },
                    {
                      id: "133076421",
                      name: "Roger",
                      surname: "Corbi",
                      fullname: "Corbi, Roger"
                    },
                    {
                      id: "132447738",
                      name: "Manuel",
                      surname: "Corbi",
                      fullname: "Corbi, Manuel"
                    }
                  ]
                }
              }
            ]
          },
          format: {
            id: "42223249",
            name: "Type 6",
            types: "susc",
            sell_type: "susc",
            est: "N"
          },
          media: {
            originaltitle: "Ben Hur (2010)",
            description_extended:
              "Ben Hur de Judá está destinado a tener muchas vidas: la de un empresario poderoso, la de un esclavo consciente de sus deberes, la de un gladiador, la de un noble romano y, finalmente, la de un héroe victorioso.",
            publishyear: "2010",
            boxoffice: "0.0",
            rating: {
              id: "30",
              code: "PG-13",
              desc: "Apta para mayores de 13"
            },
            duration: "03:12:51",
            haspreview: "true",
            countryoforigin: {
              code: "UK",
              desc: "Reino Unido"
            },
            profile: {
              audiotype: "MA 01 SCH",
              videotype: "Color",
              screenformat: "16:9",
              hd: {
                enabled: "true",
                detail: "720p"
              }
            },
            islive: "0",
            livetype: null,
            liveref: null,
            timeshift: null,
            encoder_tecnology: {
              id: null,
              desc: null
            },
            recorder_technology: {
              id: null,
              desc: null
            },
            resource_name: null,
            rollingcreditstime: "-80",
            rollingcreditstimedb: "-80",
            proveedor: {
              id: "1",
              codigo: "amco",
              nombre: "AMCO"
            },
            rights: {
              start_date: "2020-10-25",
              end_date: "2021-10-24"
            },
            channel_number: null,
            language: {
              original: {
                id: "ING",
                desc: "Inglés"
              },
              dubbed: "true",
              subbed: "true",
              options: {
                option: [
                  {
                    group_id: "907348",
                    content_id: "1013050",
                    current_content: "false",
                    option_id: "O-EN",
                    audio: "ORIGINAL",
                    subtitle: null,
                    option_name: "original",
                    id: "EN",
                    desc: "Inglés",
                    label_short: "Id. Inglés",
                    label_large: "Idioma Original Inglés",
                    intro_start_time: null,
                    intro_finish_time: null,
                    credits_start_time: "-80",
                    encodes: [
                      "hls",
                      "hlsfps",
                      "hls_ma",
                      "hlsfps_ma",
                      "hlsprm",
                      "smooth_streaming",
                      "smooth_streaming_ma",
                      "dashpr",
                      "dashwv",
                      "dashwv_ma",
                      "dashpr_ma"
                    ],
                    fast_play: []
                  },
                  {
                    group_id: "907348",
                    content_id: "1013051",
                    current_content: "false",
                    option_id: "D-PT",
                    audio: "PT",
                    subtitle: null,
                    option_name: "dubbed",
                    id: "PT",
                    desc: "Portugués",
                    label_short: "Dob. Portugués",
                    label_large: "Doblada al Portugués",
                    intro_start_time: null,
                    intro_finish_time: null,
                    credits_start_time: "-80",
                    encodes: [
                      "hls",
                      "hlsfps",
                      "hls_ma",
                      "hlsfps_ma",
                      "hlsprm",
                      "smooth_streaming",
                      "smooth_streaming_ma",
                      "dashpr",
                      "dashwv",
                      "dashwv_ma",
                      "dashpr_ma"
                    ],
                    fast_play: []
                  },
                  {
                    group_id: "907348",
                    content_id: "1013052",
                    current_content: "false",
                    option_id: "D-ES",
                    audio: "ES",
                    subtitle: null,
                    option_name: "dubbed",
                    id: "ES",
                    desc: "Español",
                    label_short: "Dob. Español",
                    label_large: "Doblada al Español",
                    intro_start_time: null,
                    intro_finish_time: null,
                    credits_start_time: "-80",
                    encodes: [
                      "hls",
                      "hlsfps",
                      "hls_ma",
                      "hlsfps_ma",
                      "hlsprm",
                      "smooth_streaming",
                      "smooth_streaming_ma",
                      "dashpr",
                      "dashwv",
                      "dashwv_ma",
                      "dashpr_ma"
                    ],
                    fast_play: []
                  },
                  {
                    group_id: "907348",
                    content_id: "1013053",
                    current_content: "false",
                    option_id: "S-PT",
                    audio: "ORIGINAL",
                    subtitle: "PT",
                    option_name: "subbed",
                    id: "PT",
                    desc: "Portugués",
                    label_short: "Subt. Portugués",
                    label_large: "Subtitulada al Portugués",
                    intro_start_time: null,
                    intro_finish_time: null,
                    credits_start_time: "-80",
                    encodes: [
                      "hls",
                      "hlsfps",
                      "hls_ma",
                      "hlsfps_ma",
                      "hlsprm",
                      "smooth_streaming",
                      "smooth_streaming_ma",
                      "dashpr",
                      "dashwv",
                      "dashwv_ma",
                      "dashpr_ma"
                    ],
                    fast_play: []
                  },
                  {
                    group_id: "907348",
                    content_id: "1013054",
                    current_content: "false",
                    option_id: "S-ES",
                    audio: "ORIGINAL",
                    subtitle: "ES",
                    option_name: "subbed",
                    id: "ES",
                    desc: "Español",
                    label_short: "Subt. Español",
                    label_large: "Subtitulada al Español",
                    intro_start_time: null,
                    intro_finish_time: null,
                    credits_start_time: "-80",
                    encodes: [
                      "hls",
                      "hlsfps",
                      "hls_ma",
                      "hlsfps_ma",
                      "hlsprm",
                      "smooth_streaming",
                      "smooth_streaming_ma",
                      "dashpr",
                      "dashwv",
                      "dashwv_ma",
                      "dashpr_ma"
                    ],
                    fast_play: []
                  }
                ],
                count: 5
              }
            }
          }
        },
        ranking: {
          views_count: 0,
          votes_count: 73,
          average_votes: 4
        }
      },
      universal_id: {
        content_providers: [
          {
            group_id: "907348",
            provider_id: "1",
            provider_code: "amco"
          }
        ],
        metadata_providers: []
      }
    }
  },
  status: "0",
  msg: "OK"
};

describe("<MovieDetails />", () => {
  it("render without crashing if especific movie exist in the DOM", () => {
    render(<App {...props} />);
    expect(screen.getByText("Ben Hur")).toBeInTheDocument();
    expect(screen.getByText("2010")).toBeInTheDocument();
    expect(screen.getByText("PG-13")).toBeInTheDocument();
  });
});

describe("<Card />", () => {
  it("should show > 1 movie images in the DOM", async () => {
    render(<Card {...props} />);

    expect(observe).toHaveBeenCalled();
    expect(screen.getByText("Loading...")).toBeInTheDocument();
    const movies = await screen.findAllByTestId("image");
    expect(movies).toMatchSnapshot();
  });
});
