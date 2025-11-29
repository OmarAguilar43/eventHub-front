// app/page.tsx
"use client";

import { useQuery } from "@apollo/client/react";
import { GetUsuariosData } from "./lib/types/usuarios";
import { GET_USUARIOS } from "./lib/graphql/usuarios";




export default function HomePage() {
  const { data, loading, error } = useQuery<GetUsuariosData>(GET_USUARIOS);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-slate-300 animate-pulse">Cargando usuarios...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-red-400">
          Error al cargar usuarios: {error.message}
        </p>
      </main>
    );
  }

  const usuarios = data?.usuarios ?? [];

  return (
    <main className="min-h-screen p-8 bg-slate-950 text-slate-50">
      <section className="max-w-5xl mx-auto space-y-6">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold">UAQ EventHub - Usuarios</h1>
          <p className="text-slate-300">
            Lista de usuarios obtenida desde el servidor GraphQL.
          </p>
        </header>

        {usuarios.length === 0 ? (
          <p className="text-slate-400">No hay usuarios registrados aún.</p>
        ) : (
          <div className="overflow-x-auto rounded-lg border border-slate-800 bg-slate-900/40">
            <table className="min-w-full text-sm">
              <thead className="bg-slate-900/80">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold text-slate-300">
                    ID
                  </th>
                  <th className="px-4 py-2 text-left font-semibold text-slate-300">
                    Nombre
                  </th>
                  <th className="px-4 py-2 text-left font-semibold text-slate-300">
                    Correo
                  </th>
                  <th className="px-4 py-2 text-left font-semibold text-slate-300">
                    Rol
                  </th>
                </tr>
              </thead>
              <tbody>
                {usuarios.map((u) => (
                  <tr
                    key={u.id}
                    className="border-t border-slate-800 hover:bg-slate-800/40"
                  >
                    <td className="px-4 py-2 font-mono text-xs text-slate-400">
                      {u.id}
                    </td>
                    <td className="px-4 py-2">{u.nombre}</td>
                    <td className="px-4 py-2 text-slate-300">{u.correo}</td>
                    <td className="px-4 py-2">
                      <span className="inline-flex rounded-full bg-slate-800 px-2 py-1 text-xs uppercase tracking-wide text-slate-200">
                        {u.rol}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </main>
  );
}
