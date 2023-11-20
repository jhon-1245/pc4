import { Component } from '@angular/core';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component {
  
  gridItems: { image: string; title: string; text: string }[] = [
    { image: 'assets/tomomedic.jpg', title: 'Tomomedic', text: 'Es ideal y recomendado para el tratamiento precoz de infarto al miocardio y estudios de arterias coronarias, cardiopatías congénitas, entre otros.' },
    { image: 'assets/emergencia.jpg', title: 'Emergencia', text: 'La Clínica cuenta con 50 modernos tópicos de emergencia distribuidos en 32 para la emergencia de adultos y 18 pediátricos convirtiéndose en la emergencia privada más grande del país, diseñada para manejar todo tipo de situaciones de atención crítica y urgencias.' },
    { image: 'assets/oncologico.jpg', title: 'Centro Oncologico', text: 'La complejidad del cáncer ha originado que en su tratamiento intervengan diversas disciplinas, las que se pueden agrupar en tres grandes áreas de acción: cirugía, oncología médica y radioterapia' },
    { image: 'assets/hospitalizacion.jpg', title: 'Hospitalizacion', text: 'Ponemos a su disposición todos los recursos humanos y técnicos a nuestro alcance con el objetivo de facilitar el diagnóstico y tratamiento que permitan su pronta recuperación.' },
    { image: 'assets/intensivos.jpg', title: 'Unidad de Cuidados Intensivos', text: 'Contamos con 12 camas y dos áreas de aislamiento con modernos equipos de monitoreo, diagnóstico y tratamiento que permiten evaluar un gran número de variables clínicas, detectar alteraciones de los diferentes órganos comprometidos e infundir medicamentos especiales en dosis estrictamente controladas.' },
    { image: 'assets/ambulancias.jpg', title: 'Ambulancias Cardiomovil', text: 'Nuestras ambulancias son nuevas, modernas, seguras, confortables y equipadas adecuadamente para brindar la mejor atención y seguridad a nuestros clientes. ' },
    { image: 'assets/rehabilitacion.jpg', title: 'Rehabilitacion', text: 'Amplios ambientes que brindan una atención personalizada cuyo objetivo es lograr la recuperación funcional, ergonómica y músculo esquelético de nuestros pacientes, aplicando diferentes métodos fisioterapéuticos.' },
    { image: 'assets/materno.jpg', title: 'Unidad Materno Infantil', text: 'Ofrecemos una atención integral tanto a la madre como al recién nacido. Contamos con habitaciones suites e individuales completamente equipadas para la comodidad de la mamá y el bebé en un ambiente cálido y agradable.' },
  ];
}
