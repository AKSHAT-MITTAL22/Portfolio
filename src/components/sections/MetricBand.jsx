import { metrics } from "../../data";
import { useMetricCounter } from "../../hooks/useMetricCounter";
import RevealOnScroll from "../ui/RevealOnScroll";

function MetricCard({ metric }) {
  const { ref, display } = useMetricCounter(metric.value, metric.suffix);

  return (
    <RevealOnScroll as="article" className={`metric metric-${metric.variant}`}>
      <strong ref={ref}>{display}</strong>
      <span>{metric.label}</span>
    </RevealOnScroll>
  );
}

export default function MetricBand() {
  return (
    <section className="metric-band" aria-label="Impact metrics">
      <div className="container metric-grid">
        {metrics.map((metric) => (
          <MetricCard key={metric.label} metric={metric} />
        ))}
      </div>
    </section>
  );
}
