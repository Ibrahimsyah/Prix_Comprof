import { Link } from 'gatsby';
import React from 'react';

const Footer = () => {
  return (
    <section className="container mt-auto mx-auto px-8">
      <div className="grid py-8 gap-8 grid-cols-1 lg:grid-cols-3">
        <div className="text-center">
          <h2 className="prix-primary-color text-lg font-bold">Kontak</h2>
          <div className="grid gap-5 grid-cols-2">
            <div>
              <h3 className="prix-primary-color mt-4 text-lg">
              Telepon
              </h3>
              <p className="text-sm">
              (021)-22708903
              </p>
              <h3 className="prix-primary-color mt-4 text-lg">
              Email
              </h3>
              <p className="text-sm">
              marketing@prixbi.com
              </p>
            </div>
            <div>
              <h3 className="prix-primary-color mt-4 text-lg">
              Alamat Kantor
              </h3>
              <p className="text-sm">
              AD Premier 9th Floor
              Jl. TB Simatupang No. 5
              Ragunan, Pasar Minggu,
              Jakarta Selatan, 12550
              </p>
            </div>
          </div>
        </div>
        <div className="text-center flex flex-col">
          <h2 className="prix-primary-color text-lg font-bold mb-4">
            Other
          </h2>
          <div className="grid gap-2">
            <Link to="#">Beranda</Link>
            <Link to="#">Tentang Kami</Link>
            <Link to="#">Produk</Link>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15809.064826460417!2d112.6794581!3d-7.867187200000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd62b0ffcec02b5%3A0xf016690a0b7ff2a6!2zN8KwNTInMDIuNSJTIDExMsKwNDAnNDguMyJF!5e0!3m2!1sen!2sid!4v1634606854707!5m2!1sen!2sid"
          width="100%"
          height="200"
          loading="lazy"></iframe>
      </div>
      <div className="text-center text-black py-4">
        <p className="text-sm">
        Copyright © 2020 PT. PT. Prix Berkat Abadi. All Right Reserved
        </p>
      </div>
    </section>
  );
};

export default Footer;
