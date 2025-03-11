"use client";

import React, { useState } from "react";
import Footer from "./Footer";

/* eslint-disable @next/next/no-img-element */
function Gallery() {
  // Estado para controlar la visibilidad del segundo div
  const [showSecondDiv, setShowSecondDiv] = useState(false);

  // Estado para controlar el zoom en las imágenes
  const [zoomedImage, setZoomedImage] = useState(null); // Almacenamos la imagen que está siendo "ampliada"

  // Función para manejar el clic en "Mostrar más"
  const handleShowMore = () => {
    setShowSecondDiv(true);
  };

  // Función para manejar el clic en una imagen
  const handleImageClick = (image) => {
    if (zoomedImage === image) {
      // Si la imagen ya está haciendo zoom, la desactuamos
      setZoomedImage(null);
    } else {
      // Si no está en zoom, la ponemos en zoom
      setZoomedImage(image);
    }
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setZoomedImage(null);
  };

  return (
    <div className="bg-gray-100 h-screen">
      {/* Primer div */}
      <div className=" grid grid-cols-1 md:grid-cols-6 md:grid-rows-6 gap-6 md:h-full p-8 container mx-auto px-16 py-8">
        {/* Título central */}
        <div className="md:col-span-4 md:row-span-4 flex justify-center items-center text-center">
          <h1 className="text-4xl font-semibold text-gray-800 max-w-3xl">
            Anyone can get dressed up and look glamorous, but it is how people
            dress in their days off that are the most intriguing.
          </h1>
        </div>

        {/* Imagen 1 con hover */}
        <div
          className="md:col-span-2 bg-primary md:row-span-2 md:col-start-5 rounded-3xl overflow-hidden relative shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out "
          onClick={() =>
            handleImageClick(
              "https://demo.cocobasic.com/opta-html/images/img_01.jpg"
            )
          }
        >
          <img
            src="https://demo.cocobasic.com/opta-html/images/img_01.jpg"
            alt="Image 1"
            className={`md:w-full md:h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110 cursor-pointer ${
              zoomedImage ===
              "https://demo.cocobasic.com/opta-html/images/img_01.jpg"
                ? "scale-125"
                : ""
            }`}
          />
        </div>

        {/* Imagen 2 con hover */}
        <div
          className="md:col-span-2 bg-primary md:row-span-2 md:col-start-5 md:row-start-3 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
          onClick={() =>
            handleImageClick(
              "https://demo.cocobasic.com/opta-html/images/img_02.jpg"
            )
          }
        >
          <img
            src="https://demo.cocobasic.com/opta-html/images/img_02.jpg"
            alt="Image 2"
            className={`md:w-full md:h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110 cursor-pointer ${
              zoomedImage ===
              "https://demo.cocobasic.com/opta-html/images/img_02.jpg"
                ? "scale-125"
                : ""
            }`}
          />
        </div>

        {/* Imagen 3 con hover */}
        <div
          className="md:col-span-3 bg-primary md:row-span-2 md:row-start-5 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
          onClick={() =>
            handleImageClick(
              "https://demo.cocobasic.com/opta-html/images/img_03.jpg"
            )
          }
        >
          <img
            src="https://demo.cocobasic.com/opta-html/images/img_03.jpg"
            alt="Image 3"
            className={`md:w-full md:h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110 cursor-pointer ${
              zoomedImage ===
              "https://demo.cocobasic.com/opta-html/images/img_03.jpg"
                ? "scale-125"
                : ""
            }`}
          />
        </div>

        {/* Imagen 4 con hover */}
        <div
          className="md:col-span-3 bg-primary md:row-span-2 md:col-start-4 md:row-start-5 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
          onClick={() =>
            handleImageClick(
              "https://demo.cocobasic.com/opta-html/images/img_05.jpg"
            )
          }
        >
          <img
            src="https://demo.cocobasic.com/opta-html/images/img_05.jpg"
            alt="Image 4"
            className={`md:w-full md:h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110 cursor-pointer ${
              zoomedImage ===
              "https://demo.cocobasic.com/opta-html/images/img_05.jpg"
                ? "scale-125"
                : ""
            }`}
          />
        </div>

        {/* Botón Mostrar Más */}
        {!showSecondDiv && (
          <div className="md:col-span-6 text-center mt-8">
            <button
              onClick={handleShowMore}
              className="px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition duration-300"
            >
              Mostrar más
            </button>
          </div>
        )}
      </div>

      {/* Segundo div que se muestra al hacer clic en "Mostrar más" */}
      {showSecondDiv && (
        <div className="grid md:grid-cols-6 grid-cols-1 md:grid-rows-6 gap-6 md:h-full p-8 mx-auto container px-16">
          {/* Título central */}
          <div
            className="md:col-span-4 bg-primary md:row-span-4  rounded-3xl overflow-hidden relative shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
            onClick={() =>
              handleImageClick(
                "https://demo.cocobasic.com/opta-html/images/img_06.jpg"
              )
            }
          >
            {" "}
            <img
              src="https://demo.cocobasic.com/opta-html/images/img_06.jpg"
              alt="Image 1"
              className={`md:w-full md:h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110 cursor-pointer ${
                zoomedImage ===
                "https://demo.cocobasic.com/opta-html/images/img_06.jpg"
                  ? "scale-125"
                  : ""
              }`}
              onClick={() =>
                handleImageClick(
                  "https://demo.cocobasic.com/opta-html/images/img_06.jpg"
                )
              }
            />
          </div>

          {/* Imagen 1 con hover */}
          <div
            className="md:col-span-2 bg-primary md:row-span-2 md:col-start-5 rounded-3xl overflow-hidden relative shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
            onClick={() =>
              handleImageClick(
                "https://demo.cocobasic.com/opta-html/images/img_07.jpg"
              )
            }
          >
            <img
              src="https://demo.cocobasic.com/opta-html/images/img_07.jpg"
              alt="Image 1"
              className={`md:w-full md:h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110 cursor-pointer ${
                zoomedImage ===
                "https://demo.cocobasic.com/opta-html/images/img_07.jpg"
                  ? "scale-125"
                  : ""
              }`}
            />
          </div>

          {/* Imagen 2 con hover */}
          <div
            className="md:col-span-2 bg-primary md:row-span-2 md:col-start-5 md:row-start-3 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
            onClick={() =>
              handleImageClick(
                "https://demo.cocobasic.com/opta-html/images/img_08.jpg"
              )
            }
          >
            <img
              src="https://demo.cocobasic.com/opta-html/images/img_08.jpg"
              alt="Image 2"
              className={`md:w-full md:h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110 cursor-pointer ${
                zoomedImage ===
                "https://demo.cocobasic.com/opta-html/images/img_08.jpg"
                  ? "scale-125"
                  : ""
              }`}
            />
          </div>

          {/* Imagen 4 con hover */}
          <div
            className="md:col-span-3 bg-primary md:row-span-2 md:col-start-1 md:row-start-5 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
            onClick={() =>
              handleImageClick(
                "https://demo.cocobasic.com/opta-html/images/img_11.jpg"
              )
            }
          >
            <img
              src="https://demo.cocobasic.com/opta-html/images/img_11.jpg"
              alt="Image 4"
              className={`md:w-full md:h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110 cursor-pointer ${
                zoomedImage ===
                "https://demo.cocobasic.com/opta-html/images/img_11.jpg"
                  ? "scale-125"
                  : ""
              }`}
            />
          </div>

          {/* Título central */}
          <div className="md:col-span-3 md:row-span-3 flex justify-center items-center text-center">
            <h1 className="text-4xl font-semibold text-gray-800 max-w-3xl">
              Fashion is not just about clothes; it is about expressing your
              inner style and confidence.
            </h1>
          </div>
        </div>
      )}

      {/* Modal para mostrar la imagen en zoom */}
      {zoomedImage && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative">
            <img
              src={zoomedImage}
              alt="Zoomed"
              className="max-w-full max-h-full object-contain cursor-pointer"
              onClick={closeModal}
            />
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-primary text-6xl font-bold"
            >
              ×
            </button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Gallery;
