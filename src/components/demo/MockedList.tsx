"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export function MockedList() {
  const [items, setItems] = React.useState<{ id: number; name: string }[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [query, setQuery] = React.useState("");

  const load = React.useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/example");
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data: { items: { id: number; name: string }[] } = await res.json();
      setItems(data.items);
    } catch (e: unknown) {
      const message = e instanceof Error ? e.message : "Failed to load";
      setError(message);
    } finally {
      setLoading(false);
    }
  }, []);

  React.useEffect(() => {
    load();
  }, [load]);

  const filtered = items.filter((it) =>
    it.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Mocked Items</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <Input
              placeholder="Filter items..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="max-w-xs"
            />
            <Button onClick={load} disabled={loading}>
              {loading ? "Loading..." : "Reload"}
            </Button>
          </div>
          {error && (
            <div className="text-sm text-red-600 dark:text-red-400">{error}</div>
          )}
          <ul className="list-disc pl-5">
            {filtered.map((it) => (
              <li key={it.id}>{it.name}</li>
            ))}
            {!loading && !error && filtered.length === 0 && (
              <li className="list-none text-foreground/60">No items</li>
            )}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
