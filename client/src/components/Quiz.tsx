import { useState } from 'react';
import { RotateCcw, ArrowLeft } from 'lucide-react';
import { useLocation } from 'wouter';

interface QuizQuestion {
  id: number;
  question: string;
  alternatives: {
    letter: string;
    text: string;
  }[];
  correctAnswer: string;
  supportText: string;
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "Segundo o guia, o que ajuda a criar uma boa primeira impressão ao receber um cliente?",
    alternatives: [
      { letter: "A", text: "Cumprimentar com sorriso e dizer \"Olá, seja bem-vindo!\", apresentando-se pelo nome." },
      { letter: "B", text: "Perguntar imediatamente o que a pessoa quer comprar sem cumprimentar." },
      { letter: "C", text: "Evitar chamar o cliente pelo nome para manter formalidade." },
      { letter: "D", text: "Cruzar os braços e falar rapidamente para economizar tempo." }
    ],
    correctAnswer: "A",
    supportText: "O guia recomenda cumprimentar com sorriso, dar boas-vindas e apresentar-se, chamando o cliente pelo nome quando possível."
  },
  {
    id: 2,
    question: "O que caracteriza uma escuta ativa segundo o guia?",
    alternatives: [
      { letter: "A", text: "Falar mais que o cliente para orientá-lo rapidamente." },
      { letter: "B", text: "Deixar o cliente explicar o que deseja, fazer perguntas abertas e resumir o que entendeu no final." },
      { letter: "C", text: "Oferecer soluções antes de ouvir as necessidades." },
      { letter: "D", text: "Interromper o cliente com perguntas fechadas para acelerar a venda." }
    ],
    correctAnswer: "B",
    supportText: "Escuta ativa é ouvir mais do que falar, fazer perguntas abertas e resumir o que entendeu para mostrar que realmente ouviu."
  },
  {
    id: 3,
    question: "No passo de levantamento de necessidades, o que se deve fazer?",
    alternatives: [
      { letter: "A", text: "Apresentar apenas o produto básico." },
      { letter: "B", text: "Fazer perguntas abertas, como \"Para quem é o presente?\", ouvir com atenção e ajudar o cliente a definir a solução." },
      { letter: "C", text: "Focar exclusivamente no preço." },
      { letter: "D", text: "Evitar perguntar para não constranger o cliente." }
    ],
    correctAnswer: "B",
    supportText: "A etapa recomenda perguntas abertas para descobrir motivações e escutar com atenção para encontrar a melhor solução."
  },
  {
    id: 4,
    question: "Sobre cross-selling e upselling, o que o guia orienta?",
    alternatives: [
      { letter: "A", text: "Sempre sugerir produtos complementares e indicar uma opção superior apenas quando agregar valor real, respeitando o orçamento." },
      { letter: "B", text: "Evitar oferecer itens adicionais, pois pode incomodar o cliente." },
      { letter: "C", text: "Focar apenas nos produtos mais caros, independentemente da necessidade." },
      { letter: "D", text: "Sugerir complementos apenas se o cliente perguntar." }
    ],
    correctAnswer: "A",
    supportText: "O guia orienta sugerir complementos e só indicar opção superior quando realmente agregar valor, respeitando o orçamento."
  },
  {
    id: 5,
    question: "O que caracteriza um layout inteligente na organização da loja?",
    alternatives: [
      { letter: "A", text: "Colocar itens de alta margem em áreas quentes como entrada, caixas e corredores, deixando áreas frias para ilhas temáticas que estimulem circulação." },
      { letter: "B", text: "Distribuir os produtos de forma aleatória para incentivar a exploração." },
      { letter: "C", text: "Colocar ilhas temáticas apenas nas áreas de maior fluxo." },
      { letter: "D", text: "Evitar qualquer sinalização ou divisão de áreas." }
    ],
    correctAnswer: "A",
    supportText: "Layout inteligente usa áreas quentes para lançamentos/alta margem e áreas frias para ilhas temáticas que estimulem circulação."
  },
  {
    id: 6,
    question: "O que envolve a limpeza impecável segundo o guia?",
    alternatives: [
      { letter: "A", text: "Manter chão, prateleiras, vitrines e banheiros sempre limpos e retirar imediatamente itens vencidos ou danificados." },
      { letter: "B", text: "Limpar apenas a área do caixa." },
      { letter: "C", text: "Fazer uma faxina geral uma vez por mês." },
      { letter: "D", text: "Limpar apenas quando clientes reclamarem." }
    ],
    correctAnswer: "A",
    supportText: "O guia enfatiza limpeza constante e retirada imediata de itens vencidos ou danificados."
  }
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [answered, setAnswered] = useState<{ [key: number]: boolean }>({});
  const [showResult, setShowResult] = useState<{ [key: number]: boolean }>({});
  const [quizComplete, setQuizComplete] = useState(false);

  const handleAnswer = (letter: string) => {
    if (answered[currentQuestion]) return;

    setAnswers({ ...answers, [currentQuestion]: letter });
    setAnswered({ ...answered, [currentQuestion]: true });
    setShowResult({ ...showResult, [currentQuestion]: true });

    if (currentQuestion === QUIZ_QUESTIONS.length - 1) {
      setTimeout(() => setQuizComplete(true), 500);
    }
  };

  const handleNext = () => {
    if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setAnswered({});
    setShowResult({});
    setQuizComplete(false);
  };

  const [, setLocation] = useLocation();

  const handleBackToGuide = () => {
    setLocation('/');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const correctCount = Object.entries(answers).filter(
    ([qIndex, answer]) => answer === QUIZ_QUESTIONS[parseInt(qIndex)].correctAnswer
  ).length;

  const question = QUIZ_QUESTIONS[currentQuestion];
  const isCorrect = answers[currentQuestion] === question.correctAnswer;
  const hasAnswered = answered[currentQuestion];

  if (quizComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10 py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 text-center space-y-6">
            <div className="text-6xl font-bold text-primary">
              {correctCount}/{QUIZ_QUESTIONS.length}
            </div>
            <h2 className="text-3xl font-heading font-bold text-foreground">
              {correctCount === QUIZ_QUESTIONS.length
                ? "Parabéns! Você domina o guia! 🎉"
                : correctCount >= 4
                ? "Ótimo desempenho! 👏"
                : "Continue estudando! 📚"}
            </h2>
            <p className="text-lg text-muted-foreground">
              Você acertou {correctCount} de {QUIZ_QUESTIONS.length} perguntas.
            </p>
            <div className="flex flex-col gap-4 justify-center">
              <button
                onClick={handleRestart}
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
              >
                <RotateCcw className="w-5 h-5" />
                Reiniciar Quiz
              </button>
              <button
                onClick={handleBackToGuide}
                className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-full font-semibold hover:bg-secondary/80 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Voltar para o Guia
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Quiz de Avaliação
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Responda com base no seu entendimento do Guia. Após escolher uma alternativa, você verá imediatamente se acertou ou errou e qual é a resposta correta.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold text-primary">
              Pergunta {currentQuestion + 1} de {QUIZ_QUESTIONS.length}
            </span>
            <span className="text-sm font-semibold text-muted-foreground">
              {correctCount} acertos
            </span>
          </div>
          <div className="w-full bg-border rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-10 mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">
            {question.question}
          </h2>

          {/* Alternatives */}
          <div className="space-y-3 mb-8">
            {question.alternatives.map((alt) => {
              const isSelected = answers[currentQuestion] === alt.letter;
              const isCorrectAnswer = alt.letter === question.correctAnswer;
              const isWrongAnswer = isSelected && !isCorrect;

              let buttonClass = "border-2 border-border bg-white hover:bg-secondary/5";
              if (hasAnswered && isCorrectAnswer) {
                buttonClass = "border-2 border-green-500 bg-green-50";
              } else if (isWrongAnswer) {
                buttonClass = "border-2 border-red-500 bg-red-50";
              }

              return (
                <button
                  key={alt.letter}
                  onClick={() => handleAnswer(alt.letter)}
                  disabled={hasAnswered}
                  className={`w-full text-left p-4 rounded-2xl transition-all font-medium ${buttonClass} ${
                    hasAnswered ? "cursor-default" : "cursor-pointer"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-current flex items-center justify-center font-bold">
                      {alt.letter}
                    </div>
                    <div className="flex-grow text-foreground">{alt.text}</div>
                    {hasAnswered && isCorrectAnswer && (
                      <span className="text-green-600 text-xl">✅</span>
                    )}
                    {isWrongAnswer && <span className="text-red-600 text-xl">❌</span>}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Feedback */}
          {hasAnswered && (
            <div className={`p-4 rounded-2xl mb-6 ${isCorrect ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`}>
              <div className={`font-bold mb-2 ${isCorrect ? "text-green-700" : "text-red-700"}`}>
                {isCorrect ? "✅ Você acertou!" : "❌ Você errou"}
              </div>
              <div className="text-sm text-foreground mb-2">
                <strong>Resposta correta:</strong> {question.correctAnswer}
              </div>
              <div className="text-sm text-muted-foreground">
                <strong>Trecho de apoio:</strong> {question.supportText}
              </div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex gap-4 justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="px-6 py-3 rounded-full font-semibold border-2 border-primary text-primary hover:bg-primary/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            ← Anterior
          </button>

          <button
            onClick={handleNext}
            disabled={!hasAnswered || currentQuestion === QUIZ_QUESTIONS.length - 1}
            className="px-6 py-3 rounded-full font-semibold bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Próxima →
          </button>
        </div>
      </div>
    </div>
  );
}
