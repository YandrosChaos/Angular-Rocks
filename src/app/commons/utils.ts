import Swal from 'sweetalert2';
import { Band } from '../models/band';

export function successSwal(): void {
  Swal.fire({
    icon: 'success',
    text: 'Success!',
    showConfirmButton: false,
    position: 'top-end',
    timer: 1500,
    showClass: {
      popup: 'animate__animated animate__rotateInUpRight',
    },
    hideClass: {
      popup: 'animate__animated animate__rotateOutDownRight',
    },
  });
}

export function renderBandFromCollection(item: any): Band {
  return item.payload.doc.data() as Band;
}

export function renderBandFromDocument(item: any): Band {
  return {
    name: item.payload.get('name'),
    description: item.payload.get('description'),
    formedIn: item.payload.get('formedIn'),
    active: item.payload.get('active'),
    videoLink: item.payload.get('videoLink'),
    imgLink: item.payload.get('imgLink'),
  } as Band;
}

export function bandToJson(band: Band): string {
  return JSON.parse(JSON.stringify(band));
}

export function noSpacesBandName(band: Band): string {
  return band.name.replace(/\s/g, '');
}
