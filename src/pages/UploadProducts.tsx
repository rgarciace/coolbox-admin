import Button from "../components/Button";
import Header from "../components/Header";
import InputFile from "../components/InputFile";
import InputGeneral from "../components/InputGeneral";
import Section from "../components/Section";
import { ChangeEvent, MouseEvent, useState } from "react";

const UploadProducts = () => {
  const [sellerImages, setSellerImages] = useState("");
  const [sellerProduct, setSellerProduct] = useState("");
  const [images, setImages] = useState<FileList>();
  const [file, setFile] = useState<File>();

  const handleCaptureImages = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages(e.target.files);
    }
  };
  const handleSendImages = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!images) {
      console.log("Sin imágenes");
      return;
    }
    if (!sellerImages) {
      console.log("Sin seller");
      return;
    }
    for (const element of images) {
      const formdata = new FormData();
      formdata.append("file", element);
      fetch(`http://localhost:3080/api/upload-product/${sellerImages}`, {
        method: "POST",
        headers: {
          VtexIdclientAutCookie:
            "eyJhbGciOiJFUzI1NiIsImtpZCI6IkVFQkIzOTFDN0FFOUQ2RDc5NDZEOTkzREM2MjIwMzcyNkU2NUY2RkIiLCJ0eXAiOiJqd3QifQ.eyJzdWIiOiJyZ2FyY2lhQHJhc2hwZXJ1LmNvbSIsImFjY291bnQiOiJxYXN0b3JlZnJvbnQ4NDAiLCJhdWRpZW5jZSI6ImFkbWluIiwic2VzcyI6IjZjZmFmYzg0LWY3YzgtNDNmMy05YmFkLTJjNzhhN2E1ZWM0YiIsImV4cCI6MTY5NjI3ODc0MywidXNlcklkIjoiMWZiMDZiNmYtMGNkZC00ODUyLTkwMGQtODkxM2UyMzk4ZDI2IiwiaWF0IjoxNjk2MTkyMzQzLCJpc3MiOiJ0b2tlbi1lbWl0dGVyIiwianRpIjoiM2YwN2VlZTMtYTNhYS00ZGZkLWFjZTgtZjgxODZkZjJhMDczIn0.7c9JGEU8_m3bsAFIILZ2KAp0lpHFdttxxsSZc9-q25HBqO4pDNN0iRUcFo20Z2Zn5UEuC5owHPPt_XTGXtoRAw",
        },
        body: formdata,
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };
  const handleCaptureFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="main">
      <Header title="Producto" />
      <div className="sections">
        <Section
          width={50}
          title="Catálogo de Imágenes"
          description="Cargar imágenes masivamente a un seller en específico."
        >
          <form className="gap-20">
            <InputGeneral
              id="sellerId"
              label="ID del Seller"
              placeholder="seller123"
              type="text"
              value={sellerImages}
              setValue={setSellerImages}
            />
            <InputFile
              id="images"
              label="Cargar imágenes JPG"
              accept=".jpg"
              files={images}
              save={handleCaptureImages}
              multiple
            />
            <Button send={handleSendImages} text="Cargar Imágenes" />
          </form>
        </Section>
        <Section
          width={50}
          title="Información del Producto"
          description="Cargar en un archivo XLS la información necesaria para crear un producto."
        >
          <InputGeneral
            id="sellerId"
            label="ID del Seller"
            placeholder="seller123"
            type="text"
            value={sellerProduct}
            setValue={setSellerProduct}
          />
          <InputFile
            id="file"
            label="Cargar archivo XLSX"
            accept=".xlsx"
            files={file}
            save={handleCaptureFile}
          />
          <Button send={handleSendImages} text="Crear Productos" />
        </Section>
      </div>
    </div>
  );
};

export default UploadProducts;
