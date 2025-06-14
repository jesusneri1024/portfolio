"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const pages = [
  "/12line/bb1.jpg",
  "/12line/bb2.jpg",
  "/12line/bb3.jpg",
  "/12line/bb4.jpg",
  "/12line/bb5.jpg",
  "/12line/bb6.jpg",
  "/12line/bb7.jpg",
];

export default function BrandbookScrollModal() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button className="bg-black text-white hover:bg-neutral-800 transition">
          See Brandbook
        </Button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40" />
        <Dialog.Content
          className="fixed top-1/2 left-1/2 z-50 w-[95vw] h-[95vh] max-w-6xl -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white shadow-xl overflow-hidden flex flex-col"
        >
          <div className="flex justify-between items-center p-4 bg-neutral-100 border-b">
            <Dialog.Title className="text-lg font-semibold">
              12 Line Inmobiliaria
            </Dialog.Title>
            <Dialog.Close asChild>
              <button className="text-neutral-500 hover:text-black transition">
                <X className="w-5 h-5" />
              </button>
            </Dialog.Close>
          </div>

          <div className="overflow-y-scroll p-6 space-y-10">
            {pages.map((src, i) => (
              <div
                key={i}
                className="relative w-full aspect-video mx-auto max-w-5xl shadow-lg rounded-lg overflow-hidden"

              >
                <Image
                  src={src}
                  alt={`Página ${i + 1}`}
                  fill
                  style={{ objectFit: "contain" }}
                  className="rounded-lg"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
