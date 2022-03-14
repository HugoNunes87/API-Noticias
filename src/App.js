import React from 'react';
import './App.css';
import Footer from './componentes/Footer/';

function App() {

  fetch('https://newsapi.org/v2/top-headlines?country=br&apiKey=efd00de462b6418c8d2a7771ead0c512')
    .then(function (response) {
      return response.json();
    })
    .then((data) => {

      // Inserção de 6 imagens disponiveis referente as noticias 
      const img = 6;
      for (let x = 0; x <= img; x++) {
        document.getElementById(`img${x}`).setAttribute("src", data.articles[`${x}`].urlToImage)
      };

      // Inserção de 10: Descrições,Titulos,Veiculo de Imprensa e link referente as noticias
      const insert = 9;
      for (let y = 0; y <= insert; y++) {
        document.getElementById(`info${y}`).innerHTML = (data.articles[`${y}`].description)
        document.getElementById(`title${y}`).innerHTML = (data.articles[`${y}`].title)
        document.getElementById(`portal${y}`).innerHTML = (data.articles[`${y}`].source.name)
        document.getElementById(`url${y}`).setAttribute("href", data.articles[`${y}`].url)
      };
    });




  return (
    <div>

      <header className="header">
        <h1>NOTICÍAS</h1>
        <h2></h2>
      </header>

      <main className="main columns">
        <section class="column main-column">

          <a className="article first-article" id='url0' >
            <figure className="article-image is-4by3">
              <img id="img0"></img>
            </figure>
            <div className="article-body">
              <h2 className="article-title" id="title0">

              </h2>
              <p className="article-content" id="info0">

              </p>
              <footer className="article-info">
                <span id="portal0"></span>
                <span><a href='#url0'></a></span>
              </footer>
            </div>
          </a>

          <div className="columns">
            <div className="column nested-column">
              <a className="article" id='url1'>
                <figure className="article-image is-16by9">
                  <img id="img1"></img>
                </figure>
                <div className="article-body">
                  <h2 className="article-title" id="title1">

                  </h2>
                  <p className="article-content" id='info1'>

                  </p>
                  <footer className="article-info">
                    <span id="portal1"></span>
                  </footer>
                </div>
              </a>

              <a className="article" id='url2'>
                <figure className="article-image is-16by9">
                  <img id="img2"></img>
                </figure>
                <div className="article-body">
                  <h2 className="article-title" id="title2">

                  </h2>
                  <p className="article-content" id='info2'>

                  </p>
                  <footer className="article-info">
                    <span id="portal2"></span>
                  </footer>
                </div>
              </a>

              <a className="article" id='url3'>
                <figure className="article-image is-16by9">
                  <img id="img3"></img>
                </figure>
                <div className="article-body">
                  <h2 className="article-title" id="title3">

                  </h2>
                  <p className="article-content" id='info3'>

                  </p>
                  <footer className="article-info">
                    <span id="portal3"></span>
                  </footer>
                </div>
              </a>


            </div>

            <div className="column">
              <a className="article" id='url4'>
                <figure className="article-image is-16by9">
                  <img id="img4"></img>
                </figure>
                <div className="article-body">
                  <h2 className="article-title" id="title4">

                  </h2>
                  <p className="article-content" id='info4'>

                  </p>
                  <footer className="article-info">
                    <span id="portal4"></span>

                  </footer>
                </div>
              </a>

              <div className="column">
                <a className="article" id='url5'>
                  <figure class="article-image is-16by9">
                    <img id="img5"></img>
                  </figure>
                  <div className="article-body">
                    <h2 className="article-title" id="title5">

                    </h2>
                    <p className="article-content" id='info5'>

                    </p>
                    <footer className="article-info">
                      <span id="portal5"></span>
                    </footer>
                  </div>
                </a>
              </div>
            </div>
          </div>

        </section>

        <section className="column">
          <a className="article" id='url6'>
            <figure className="article-image is-3by2">
              <img id="img6"></img>
            </figure>
            <div className="article-body">
              <h2 className="article-title" id="title6">

              </h2>
              <p className="article-content" id="info6">

              </p>
              <footer className="article-info" >
                <span id="portal6"></span>
              </footer>
            </div>
          </a>
          <a className="article" id='url7'>
            <div className="article-body">
              <h2 className="article-title" id="title7">

              </h2>
              <p className="article-content" id='info7'>

              </p>
              <footer className="article-info">
                <span id="portal7"></span>
              </footer>
            </div>
          </a>
          <a className="article" id='url8'>
            <div className="article-body">
              <h2 className="article-title" id="title8">

              </h2>
              <p className="article-content" id='info8'>

              </p>
              <footer className="article-info" >
                <span id="portal8"></span>
              </footer>
            </div>
          </a>
          <a className="article" id='url9'>
            <div className="article-body">
              <h2 className="article-title" id="title9">

              </h2>
              <p class="article-content" id='info9'>

              </p>
              <footer class="article-info">
                <span id="portal9"></span>
              </footer>
            </div>
          </a>
        </section>
      </main>
      <Footer />

    </div>
  );
}

export default App;
