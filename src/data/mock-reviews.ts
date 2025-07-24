// api/src/data/mock-reviews.ts
// Questo file contiene dati di recensioni fittizie per simulare la risposta di Google My Business API.

// Definisci un'interfaccia per la struttura di una recensione
export interface Review {
  reviewId: string;
  reviewer: {
    displayName: string;
    profilePhotoUrl: string;
    isVerified: boolean; // Indica se l'utente è "verificato" da Google (simulato)
  };
  starRating: 'FIVE' | 'FOUR' | 'THREE' | 'TWO' | 'ONE';
  comment: string;
  createTime: string;
  updateTime: string;
  reviewReply?: { // La risposta del proprietario dell'attività, opzionale
    comment: string;
    updateTime: string;
  };
}

export const mockReviews: Review[] = [
  {
    reviewId: 'mock-review-1',
    reviewer: {
      displayName: 'Mario Rossi',
      profilePhotoUrl: 'https://placehold.co/40x40/007bff/ffffff?text=MR', // Placeholder
      isVerified: true
    },
    starRating: 'FIVE',
    comment: 'Servizio eccezionale! Aleksander ha superato le mie aspettative nello sviluppo del mio sito web. Professionale, rapido e molto attento ai dettagli. Lo consiglio vivamente!',
    createTime: '2024-07-20T10:00:00Z',
    updateTime: '2024-07-20T10:00:00Z',
    reviewReply: {
      comment: 'Grazie mille Mario per le tue gentili parole! È stato un piacere lavorare al tuo progetto. Sono felice che tu sia soddisfatto del risultato.',
      updateTime: '2024-07-21T11:00:00Z'
    }
  },
  {
    reviewId: 'mock-review-2',
    reviewer: {
      displayName: 'Giulia Bianchi',
      profilePhotoUrl: 'https://placehold.co/40x40/28a745/ffffff?text=GB', // Placeholder
      isVerified: true
    },
    starRating: 'FIVE',
    comment: 'Aleksander è un vero professionista. Ha trasformato la mia idea in una web app funzionale e intuitiva. La comunicazione è stata ottima e ha rispettato tutte le scadenze. Cinque stelle meritate!',
    createTime: '2024-07-15T14:30:00Z',
    updateTime: '2024-07-15T14:30:00Z',
    reviewReply: {
      comment: 'Sono molto contento di sapere che la web app ti piace, Giulia! La tua visione ha reso il progetto stimolante. Grazie per la fiducia!',
      updateTime: '2024-07-16T09:00:00Z'
    }
  },
  {
    reviewId: 'mock-review-3',
    reviewer: {
      displayName: 'Luca Verdi',
      profilePhotoUrl: 'https://placehold.co/40x40/dc3545/ffffff?text=LV', // Placeholder
      isVerified: false // Questa recensione non è "verificata" per mostrare il badge
    },
    starRating: 'FOUR',
    comment: 'Buon lavoro complessivo. Il sito funziona bene e ha un bel design. Ci sono stati alcuni piccoli ritardi, ma nulla di grave. Soddisfatto.',
    createTime: '2024-07-10T09:15:00Z',
    updateTime: '2024-07-10T09:15:00Z',
    reviewReply: {
      comment: 'Grazie Luca per il tuo feedback onesto. Prendiamo nota dei ritardi per migliorare in futuro. Apprezzo la tua comprensione e sono felice che tu sia soddisfatto del risultato finale.',
      updateTime: '2024-07-11T10:00:00Z'
    }
  },
  {
    reviewId: 'mock-review-4',
    reviewer: {
      displayName: 'Anna Neri',
      profilePhotoUrl: 'https://placehold.co/40x40/ffc107/000000?text=AN', // Placeholder
      isVerified: true
    },
    starRating: 'FIVE',
    comment: 'Servizio clienti impeccabile e risultati che parlano da soli. Aleksander è andato oltre le mie aspettative per la SEO del mio e-commerce. Un vero esperto!',
    createTime: '2024-07-01T16:00:00Z',
    updateTime: '2024-07-01T16:00:00Z',
    reviewReply: {
      comment: 'Grazie Anna! Il tuo e-commerce è stato un progetto stimolante e sono felice di aver contribuito al suo successo SEO. Continuiamo così!',
      updateTime: '2024-07-02T10:00:00Z'
    }
  },
  {
    reviewId: 'mock-review-5',
    reviewer: {
      displayName: 'Marco Gialli',
      profilePhotoUrl: 'https://placehold.co/40x40/17a2b8/ffffff?text=MG', // Placeholder
      isVerified: true
    },
    starRating: 'FIVE',
    comment: 'Ho avuto bisogno di una consulenza urgente per un problema al database e Aleksander è stato incredibilmente rapido ed efficace. Ha risolto tutto in tempi record. Altamente raccomandato!',
    createTime: '2024-06-25T09:00:00Z',
    updateTime: '2024-06-25T09:00:00Z',
    reviewReply: {
      comment: 'Sono contento di aver potuto esserti d\'aiuto, Marco! La rapidità è fondamentale in queste situazioni. Grazie per la fiducia!',
      updateTime: '2024-06-26T14:00:00Z'
    }
  }
];
