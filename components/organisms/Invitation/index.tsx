import React from "react";
import Image from "next/image";
import { MdDateRange } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { BsClock } from "react-icons/bs";
import bismillah2 from "../../../public/icon/Bismillah.svg";

export default function Invitation() {
  return (
    <section id="invitation">
      <div className="section w-detail-area center-text pt-1 pb-md-4">
        <div className="container">
          <div className="about__me-image">
            <div className="mx-n2 z-index-1 position-relative">
              <Image
                src={bismillah2}
                height={200}
                width={300}
                className="kali-graf"
              />
            </div>
            <h3 className="text-assalamualaikum z-index-2 position-relative">
              Assalamu&#39;alaikum Wr. Wb.
            </h3>
            <h5 className="mb-1">
              Dengan memohon rahmat Allah S.W.T kami bermaksud menyelenggarakan
              Khitanan putra kami yang InshaAllah akan di selenggarakan pada:
            </h5>
            <div className="mb-1">
              <p className="mb-1">
                <MdDateRange /> Sabtu, 2 November 2024
              </p>
              <p className="mb-1">
                <BsClock />
                Pukul 11.00 WIB s/d Selesai
              </p>
              <p className="mb-1">
                <GoLocation />
                Perumahan Panorama Kemang, Bogor
              </p>
            </div>
            <p className="invitation-message">
              Kehadiran adalah silaturahmi, restu adalah doa cinta kasih,
              keikhlasan adalah ketulusan hati.
            </p>
            <p className="invitation-message">
              Merupakan kehormatan dan kebahagiaan bagi kami apabila
              Bapak/Ibu/Saudara/I berkenan hadir untuk memberikan doa restu
              Kepada kami
            </p>
            <h3 className="text-assalamualaikum z-index-2 position-relative">
              Wassalamu&#39;alaikum Wr. Wb.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
