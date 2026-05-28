import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LogOut, Shield, FileText, Link2, Clock, Image, Layers,
  BarChart2, MessageSquare, Settings, ChevronRight, Plus,
  Pencil, Trash2, X, Check, ChevronDown, ChevronUp, Loader2
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { supabase } from '../../lib/supabase';

// ─── types ───────────────────────────────────────────────────────────────────

type Section =
  | 'blog' | 'resources' | 'timeline'
  | 'hero' | 'programs' | 'impact'
  | 'testimonials' | 'expansion';

interface Row { id: string; [key: string]: any }

// ─── helpers ─────────────────────────────────────────────────────────────────

function Spinner() {
  return <Loader2 className="w-5 h-5 animate-spin text-yellow-500" />;
}

function Badge({ label, color }: { label: string; color: string }) {
  return (
    <span className={`inline-block text-xs px-2 py-0.5 rounded-full font-medium ${color}`}>
      {label}
    </span>
  );
}

// ─── generic table CRUD hook ──────────────────────────────────────────────────

function useTable(table: string, orderCol = 'created_at', orderAsc = false) {
  const [rows, setRows] = useState<Row[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const load = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from(table)
      .select('*')
      .order(orderCol, { ascending: orderAsc });
    if (error) setError(error.message);
    else setRows(data as Row[]);
    setLoading(false);
  }, [table, orderCol, orderAsc]);

  useEffect(() => { load(); }, [load]);

  const remove = async (id: string) => {
    await supabase.from(table).delete().eq('id', id);
    load();
  };

  const upsert = async (row: Partial<Row>) => {
    if (row.id) {
      const { id, created_at, ...rest } = row as any;
      await supabase.from(table).update(rest).eq('id', id);
    } else {
      await supabase.from(table).insert([row]);
    }
    load();
  };

  return { rows, loading, error, load, remove, upsert };
}

// ─── shared form primitives ───────────────────────────────────────────────────

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1">{label}</label>
      {children}
    </div>
  );
}

const input = 'w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400';
const textarea = `${input} resize-y min-h-[80px]`;

// ─── modal wrapper ─────────────────────────────────────────────────────────────

function Modal({ title, onClose, children }: { title: string; onClose: () => void; children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col">
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h3 className="font-bold text-lg text-gray-900">{title}</h3>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full">
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>
        <div className="overflow-y-auto p-6">{children}</div>
      </div>
    </div>
  );
}

// ─── confirm delete ────────────────────────────────────────────────────────────

function ConfirmDelete({ label, onConfirm, onCancel }: { label: string; onConfirm: () => void; onCancel: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-sm text-center">
        <Trash2 className="w-10 h-10 text-red-500 mx-auto mb-3" />
        <p className="font-semibold text-gray-900 mb-1">Delete this item?</p>
        <p className="text-sm text-gray-500 mb-6">"{label}" will be permanently removed.</p>
        <div className="flex gap-3 justify-center">
          <button onClick={onCancel} className="px-4 py-2 rounded-lg border text-sm font-medium hover:bg-gray-50">Cancel</button>
          <button onClick={onConfirm} className="px-4 py-2 rounded-lg bg-red-500 text-white text-sm font-medium hover:bg-red-600">Delete</button>
        </div>
      </div>
    </div>
  );
}

// ─── section header ────────────────────────────────────────────────────────────

function SectionHeader({ title, onAdd }: { title: string; onAdd: () => void }) {
  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      <button
        onClick={onAdd}
        className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold px-4 py-2 rounded-lg text-sm transition-colors"
      >
        <Plus className="w-4 h-4" /> Add New
      </button>
    </div>
  );
}

// ─── row actions ──────────────────────────────────────────────────────────────

function RowActions({ onEdit, onDelete }: { onEdit: () => void; onDelete: () => void }) {
  return (
    <div className="flex gap-2 flex-shrink-0">
      <button onClick={onEdit} className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-500 hover:text-gray-900 transition-colors">
        <Pencil className="w-4 h-4" />
      </button>
      <button onClick={onDelete} className="p-1.5 hover:bg-red-50 rounded-lg text-gray-400 hover:text-red-600 transition-colors">
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  );
}

// ─── Blog Posts ───────────────────────────────────────────────────────────────

const BLOG_CATEGORIES = [
  'Success Stories', 'Program Updates', 'Community Impact', 'Special Olympics',
  'Volunteer Stories', 'Giving Guides', 'Legacy Giving', 'Corporate Giving', 'Gifts in Kind'
];

const categoryColors: Record<string, string> = {
  'Success Stories': 'bg-pink-100 text-pink-700',
  'Program Updates': 'bg-blue-100 text-blue-700',
  'Community Impact': 'bg-green-100 text-green-700',
  'Special Olympics': 'bg-yellow-100 text-yellow-700',
  'Volunteer Stories': 'bg-orange-100 text-orange-700',
  'Legacy Giving': 'bg-amber-100 text-amber-700',
  'Corporate Giving': 'bg-cyan-100 text-cyan-700',
  'Gifts in Kind': 'bg-teal-100 text-teal-700',
  'Giving Guides': 'bg-sky-100 text-sky-700',
};

function BlogForm({ initial, onSave, onClose }: { initial?: Row; onSave: (v: any) => void; onClose: () => void }) {
  const empty = { id: '', title: '', excerpt: '', date: '', category: 'Program Updates', image: '', slug: '', content: '', pdf_link: '', is_featured: false };
  const [form, setForm] = useState<any>(initial ? { ...empty, ...initial } : empty);
  const set = (k: string) => (e: any) => setForm((f: any) => ({ ...f, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }));

  const handleSave = () => {
    if (!form.title.trim() || !form.slug.trim()) return;
    onSave(form);
    onClose();
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <Field label="Title">
          <input className={input} value={form.title} onChange={set('title')} placeholder="Post title" />
        </Field>
        <Field label="Slug">
          <input className={input} value={form.slug} onChange={set('slug')} placeholder="url-friendly-slug" />
        </Field>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Field label="Category">
          <select className={input} value={form.category} onChange={set('category')}>
            {BLOG_CATEGORIES.map(c => <option key={c}>{c}</option>)}
          </select>
        </Field>
        <Field label="Date">
          <input className={input} value={form.date} onChange={set('date')} placeholder="March 15, 2024" />
        </Field>
      </div>
      <Field label="Excerpt">
        <textarea className={textarea} value={form.excerpt} onChange={set('excerpt')} placeholder="Short preview text..." />
      </Field>
      <Field label="Full Content">
        <textarea className={`${textarea} min-h-[140px]`} value={form.content || ''} onChange={set('content')} placeholder="Full article content (optional)..." />
      </Field>
      <Field label="Image URL">
        <input className={input} value={form.image} onChange={set('image')} placeholder="https://..." />
      </Field>
      <div className="grid grid-cols-2 gap-4">
        <Field label="PDF Link (optional)">
          <input className={input} value={form.pdf_link || ''} onChange={set('pdf_link')} placeholder="/pdfs/guide.pdf" />
        </Field>
        <Field label="">
          <label className="flex items-center gap-2 mt-6 cursor-pointer">
            <input type="checkbox" checked={form.is_featured} onChange={set('is_featured')} className="rounded" />
            <span className="text-sm font-medium text-gray-700">Featured post</span>
          </label>
        </Field>
      </div>
      <div className="flex gap-3 pt-2 justify-end">
        <button onClick={onClose} className="px-4 py-2 rounded-lg border text-sm font-medium hover:bg-gray-50">Cancel</button>
        <button onClick={handleSave} className="px-4 py-2 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-gray-900 text-sm font-semibold flex items-center gap-2">
          <Check className="w-4 h-4" /> Save Post
        </button>
      </div>
    </div>
  );
}

function BlogSection() {
  const { rows, loading, remove, upsert } = useTable('blog_posts', 'date', false);
  const [editing, setEditing] = useState<Row | null | 'new'>(null);
  const [deleting, setDeleting] = useState<Row | null>(null);

  if (loading) return <div className="flex justify-center py-20"><Spinner /></div>;

  return (
    <div>
      <SectionHeader title="Blog Posts" onAdd={() => setEditing('new')} />
      <div className="space-y-2">
        {rows.map(row => (
          <div key={row.id} className="bg-white rounded-xl border p-4 flex items-start gap-4 hover:shadow-sm transition-shadow">
            {row.image && (
              <img src={row.image} alt="" className="w-16 h-16 rounded-lg object-cover flex-shrink-0" />
            )}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-semibold text-gray-900 truncate">{row.title}</span>
                {row.is_featured && <Badge label="Featured" color="bg-yellow-100 text-yellow-700" />}
                <Badge label={row.category} color={categoryColors[row.category] ?? 'bg-gray-100 text-gray-600'} />
              </div>
              <p className="text-sm text-gray-500 truncate">{row.excerpt}</p>
              <p className="text-xs text-gray-400 mt-0.5">{row.date} · /{row.slug}</p>
            </div>
            <RowActions onEdit={() => setEditing(row)} onDelete={() => setDeleting(row)} />
          </div>
        ))}
      </div>

      {editing && (
        <Modal title={editing === 'new' ? 'New Blog Post' : 'Edit Blog Post'} onClose={() => setEditing(null)}>
          <BlogForm initial={editing === 'new' ? undefined : editing} onSave={upsert} onClose={() => setEditing(null)} />
        </Modal>
      )}
      {deleting && (
        <ConfirmDelete label={deleting.title} onConfirm={() => { remove(deleting.id); setDeleting(null); }} onCancel={() => setDeleting(null)} />
      )}
    </div>
  );
}

// ─── Resource Links ────────────────────────────────────────────────────────────

function ResourceForm({ initial, onSave, onClose }: { initial?: Row; onSave: (v: any) => void; onClose: () => void }) {
  const empty = { id: '', name: '', logo: '', description: '', url: '' };
  const [form, setForm] = useState<any>(initial ? { ...empty, ...initial } : empty);
  const set = (k: string) => (e: any) => setForm((f: any) => ({ ...f, [k]: e.target.value }));

  return (
    <div className="space-y-4">
      <Field label="Name"><input className={input} value={form.name} onChange={set('name')} placeholder="Resource name" /></Field>
      <Field label="URL"><input className={input} value={form.url} onChange={set('url')} placeholder="https://..." /></Field>
      <Field label="Logo URL"><input className={input} value={form.logo} onChange={set('logo')} placeholder="https://..." /></Field>
      <Field label="Description"><textarea className={textarea} value={form.description} onChange={set('description')} /></Field>
      <div className="flex gap-3 pt-2 justify-end">
        <button onClick={onClose} className="px-4 py-2 rounded-lg border text-sm font-medium hover:bg-gray-50">Cancel</button>
        <button onClick={() => { onSave(form); onClose(); }} className="px-4 py-2 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-gray-900 text-sm font-semibold flex items-center gap-2">
          <Check className="w-4 h-4" /> Save
        </button>
      </div>
    </div>
  );
}

function ResourcesSection() {
  const { rows, loading, remove, upsert } = useTable('resource_links', 'created_at', true);
  const [editing, setEditing] = useState<Row | null | 'new'>(null);
  const [deleting, setDeleting] = useState<Row | null>(null);

  if (loading) return <div className="flex justify-center py-20"><Spinner /></div>;

  return (
    <div>
      <SectionHeader title="Resource Links" onAdd={() => setEditing('new')} />
      <div className="grid sm:grid-cols-2 gap-3">
        {rows.map(row => (
          <div key={row.id} className="bg-white rounded-xl border p-4 flex items-start gap-3 hover:shadow-sm transition-shadow">
            {row.logo && <img src={row.logo} alt="" className="w-10 h-10 object-contain flex-shrink-0" />}
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-gray-900 text-sm">{row.name}</div>
              <div className="text-xs text-gray-500 truncate">{row.description}</div>
              <a href={row.url} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline truncate block">{row.url}</a>
            </div>
            <RowActions onEdit={() => setEditing(row)} onDelete={() => setDeleting(row)} />
          </div>
        ))}
      </div>
      {editing && (
        <Modal title={editing === 'new' ? 'New Resource' : 'Edit Resource'} onClose={() => setEditing(null)}>
          <ResourceForm initial={editing === 'new' ? undefined : editing} onSave={upsert} onClose={() => setEditing(null)} />
        </Modal>
      )}
      {deleting && <ConfirmDelete label={deleting.name} onConfirm={() => { remove(deleting.id); setDeleting(null); }} onCancel={() => setDeleting(null)} />}
    </div>
  );
}

// ─── Timeline ─────────────────────────────────────────────────────────────────

function TimelineForm({ initial, onSave, onClose }: { initial?: Row; onSave: (v: any) => void; onClose: () => void }) {
  const empty = { id: '', year: new Date().getFullYear(), title: '', description: '', image: '', type: 'image', video_id: '' };
  const [form, setForm] = useState<any>(initial ? { ...empty, ...initial } : empty);
  const set = (k: string) => (e: any) => setForm((f: any) => ({ ...f, [k]: e.target.value }));

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <Field label="Year"><input className={input} type="number" value={form.year} onChange={set('year')} /></Field>
        <Field label="Type">
          <select className={input} value={form.type} onChange={set('type')}>
            <option value="image">Image</option>
            <option value="video">Video</option>
          </select>
        </Field>
      </div>
      <Field label="Title"><input className={input} value={form.title} onChange={set('title')} /></Field>
      <Field label="Description"><textarea className={textarea} value={form.description} onChange={set('description')} /></Field>
      <Field label="Image URL"><input className={input} value={form.image} onChange={set('image')} placeholder="https://..." /></Field>
      {form.type === 'video' && (
        <Field label="YouTube Video ID"><input className={input} value={form.video_id || ''} onChange={set('video_id')} placeholder="dQw4w9WgXcQ" /></Field>
      )}
      <div className="flex gap-3 pt-2 justify-end">
        <button onClick={onClose} className="px-4 py-2 rounded-lg border text-sm font-medium hover:bg-gray-50">Cancel</button>
        <button onClick={() => { onSave({ ...form, year: parseInt(form.year) }); onClose(); }} className="px-4 py-2 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-gray-900 text-sm font-semibold flex items-center gap-2">
          <Check className="w-4 h-4" /> Save
        </button>
      </div>
    </div>
  );
}

function TimelineSection() {
  const { rows, loading, remove, upsert } = useTable('timeline_events', 'year', true);
  const [editing, setEditing] = useState<Row | null | 'new'>(null);
  const [deleting, setDeleting] = useState<Row | null>(null);

  if (loading) return <div className="flex justify-center py-20"><Spinner /></div>;

  return (
    <div>
      <SectionHeader title="Timeline Events" onAdd={() => setEditing('new')} />
      <div className="space-y-2">
        {rows.map(row => (
          <div key={row.id} className="bg-white rounded-xl border p-4 flex items-center gap-4 hover:shadow-sm transition-shadow">
            <div className="bg-yellow-500 text-gray-900 font-black text-lg w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0">{row.year}</div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-gray-900">{row.title}</div>
              <div className="text-sm text-gray-500 truncate">{row.description}</div>
            </div>
            <Badge label={row.type} color={row.type === 'video' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'} />
            <RowActions onEdit={() => setEditing(row)} onDelete={() => setDeleting(row)} />
          </div>
        ))}
      </div>
      {editing && (
        <Modal title={editing === 'new' ? 'New Timeline Event' : 'Edit Timeline Event'} onClose={() => setEditing(null)}>
          <TimelineForm initial={editing === 'new' ? undefined : editing} onSave={upsert} onClose={() => setEditing(null)} />
        </Modal>
      )}
      {deleting && <ConfirmDelete label={`${deleting.year} — ${deleting.title}`} onConfirm={() => { remove(deleting.id); setDeleting(null); }} onCancel={() => setDeleting(null)} />}
    </div>
  );
}

// ─── Hero Slides ──────────────────────────────────────────────────────────────

function HeroSlideForm({ initial, onSave, onClose }: { initial?: Row; onSave: (v: any) => void; onClose: () => void }) {
  const empty = { id: '', image_url: '', alt_text: '', sort_order: 0 };
  const [form, setForm] = useState<any>(initial ? { ...empty, ...initial } : empty);
  const set = (k: string) => (e: any) => setForm((f: any) => ({ ...f, [k]: e.target.value }));

  return (
    <div className="space-y-4">
      <Field label="Image URL"><input className={input} value={form.image_url} onChange={set('image_url')} placeholder="https://..." /></Field>
      {form.image_url && <img src={form.image_url} alt="" className="w-full h-40 object-cover rounded-lg" />}
      <Field label="Alt Text"><input className={input} value={form.alt_text} onChange={set('alt_text')} placeholder="Descriptive alt text" /></Field>
      <Field label="Sort Order"><input className={input} type="number" value={form.sort_order} onChange={set('sort_order')} /></Field>
      <div className="flex gap-3 pt-2 justify-end">
        <button onClick={onClose} className="px-4 py-2 rounded-lg border text-sm font-medium hover:bg-gray-50">Cancel</button>
        <button onClick={() => { onSave({ ...form, sort_order: parseInt(form.sort_order) }); onClose(); }} className="px-4 py-2 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-gray-900 text-sm font-semibold flex items-center gap-2">
          <Check className="w-4 h-4" /> Save
        </button>
      </div>
    </div>
  );
}

function HeroSection() {
  const { rows, loading, remove, upsert } = useTable('hero_slides', 'sort_order', true);
  const [editing, setEditing] = useState<Row | null | 'new'>(null);
  const [deleting, setDeleting] = useState<Row | null>(null);

  if (loading) return <div className="flex justify-center py-20"><Spinner /></div>;

  return (
    <div>
      <SectionHeader title="Hero Slides" onAdd={() => setEditing('new')} />
      <div className="grid sm:grid-cols-3 gap-4">
        {rows.map(row => (
          <div key={row.id} className="bg-white rounded-xl border overflow-hidden hover:shadow-sm transition-shadow">
            <img src={row.image_url} alt={row.alt_text} className="w-full h-36 object-cover" />
            <div className="p-3 flex items-center justify-between">
              <div>
                <div className="text-xs text-gray-500 truncate">{row.alt_text}</div>
                <div className="text-xs text-gray-400">Order: {row.sort_order}</div>
              </div>
              <RowActions onEdit={() => setEditing(row)} onDelete={() => setDeleting(row)} />
            </div>
          </div>
        ))}
      </div>
      {editing && (
        <Modal title={editing === 'new' ? 'New Hero Slide' : 'Edit Hero Slide'} onClose={() => setEditing(null)}>
          <HeroSlideForm initial={editing === 'new' ? undefined : editing} onSave={upsert} onClose={() => setEditing(null)} />
        </Modal>
      )}
      {deleting && <ConfirmDelete label={deleting.alt_text} onConfirm={() => { remove(deleting.id); setDeleting(null); }} onCancel={() => setDeleting(null)} />}
    </div>
  );
}

// ─── Programs ─────────────────────────────────────────────────────────────────

const ICON_OPTIONS = ['Users', 'Sun', 'Music', 'Trophy', 'Heart', 'Star', 'BookOpen', 'Globe'];

function ProgramForm({ initial, onSave, onClose }: { initial?: Row; onSave: (v: any) => void; onClose: () => void }) {
  const empty = { id: '', title: '', description: '', icon_name: 'Users', image_url: '', sort_order: 0 };
  const [form, setForm] = useState<any>(initial ? { ...empty, ...initial } : empty);
  const set = (k: string) => (e: any) => setForm((f: any) => ({ ...f, [k]: e.target.value }));

  return (
    <div className="space-y-4">
      <Field label="Title"><input className={input} value={form.title} onChange={set('title')} /></Field>
      <Field label="Description"><textarea className={textarea} value={form.description} onChange={set('description')} /></Field>
      <div className="grid grid-cols-2 gap-4">
        <Field label="Icon Name">
          <select className={input} value={form.icon_name} onChange={set('icon_name')}>
            {ICON_OPTIONS.map(i => <option key={i}>{i}</option>)}
          </select>
        </Field>
        <Field label="Sort Order"><input className={input} type="number" value={form.sort_order} onChange={set('sort_order')} /></Field>
      </div>
      <Field label="Image URL"><input className={input} value={form.image_url} onChange={set('image_url')} placeholder="https://..." /></Field>
      <div className="flex gap-3 pt-2 justify-end">
        <button onClick={onClose} className="px-4 py-2 rounded-lg border text-sm font-medium hover:bg-gray-50">Cancel</button>
        <button onClick={() => { onSave({ ...form, sort_order: parseInt(form.sort_order) }); onClose(); }} className="px-4 py-2 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-gray-900 text-sm font-semibold flex items-center gap-2">
          <Check className="w-4 h-4" /> Save
        </button>
      </div>
    </div>
  );
}

function ProgramsSection() {
  const { rows, loading, remove, upsert } = useTable('programs', 'sort_order', true);
  const [editing, setEditing] = useState<Row | null | 'new'>(null);
  const [deleting, setDeleting] = useState<Row | null>(null);

  if (loading) return <div className="flex justify-center py-20"><Spinner /></div>;

  return (
    <div>
      <SectionHeader title="Programs" onAdd={() => setEditing('new')} />
      <div className="space-y-2">
        {rows.map(row => (
          <div key={row.id} className="bg-white rounded-xl border p-4 flex items-center gap-4 hover:shadow-sm transition-shadow">
            {row.image_url && <img src={row.image_url} alt="" className="w-16 h-16 rounded-lg object-cover flex-shrink-0" />}
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-gray-900">{row.title}</div>
              <div className="text-sm text-gray-500 truncate">{row.description}</div>
              <div className="text-xs text-gray-400">Icon: {row.icon_name} · Order: {row.sort_order}</div>
            </div>
            <RowActions onEdit={() => setEditing(row)} onDelete={() => setDeleting(row)} />
          </div>
        ))}
      </div>
      {editing && (
        <Modal title={editing === 'new' ? 'New Program' : 'Edit Program'} onClose={() => setEditing(null)}>
          <ProgramForm initial={editing === 'new' ? undefined : editing} onSave={upsert} onClose={() => setEditing(null)} />
        </Modal>
      )}
      {deleting && <ConfirmDelete label={deleting.title} onConfirm={() => { remove(deleting.id); setDeleting(null); }} onCancel={() => setDeleting(null)} />}
    </div>
  );
}

// ─── Impact Stats ─────────────────────────────────────────────────────────────

const STAT_ICONS = ['Users', 'Clock', 'Calendar', 'Heart', 'Star', 'TrendingUp', 'Award'];

function ImpactStatForm({ initial, onSave, onClose }: { initial?: Row; onSave: (v: any) => void; onClose: () => void }) {
  const empty = { id: '', icon_name: 'Users', value: '', label: '', sort_order: 0 };
  const [form, setForm] = useState<any>(initial ? { ...empty, ...initial } : empty);
  const set = (k: string) => (e: any) => setForm((f: any) => ({ ...f, [k]: e.target.value }));

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <Field label="Value"><input className={input} value={form.value} onChange={set('value')} placeholder="250+" /></Field>
        <Field label="Sort Order"><input className={input} type="number" value={form.sort_order} onChange={set('sort_order')} /></Field>
      </div>
      <Field label="Label"><input className={input} value={form.label} onChange={set('label')} placeholder="Friends Served Annually" /></Field>
      <Field label="Icon Name">
        <select className={input} value={form.icon_name} onChange={set('icon_name')}>
          {STAT_ICONS.map(i => <option key={i}>{i}</option>)}
        </select>
      </Field>
      <div className="flex gap-3 pt-2 justify-end">
        <button onClick={onClose} className="px-4 py-2 rounded-lg border text-sm font-medium hover:bg-gray-50">Cancel</button>
        <button onClick={() => { onSave({ ...form, sort_order: parseInt(form.sort_order) }); onClose(); }} className="px-4 py-2 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-gray-900 text-sm font-semibold flex items-center gap-2">
          <Check className="w-4 h-4" /> Save
        </button>
      </div>
    </div>
  );
}

function ImpactSection() {
  const { rows, loading, remove, upsert } = useTable('impact_stats', 'sort_order', true);
  const [editing, setEditing] = useState<Row | null | 'new'>(null);
  const [deleting, setDeleting] = useState<Row | null>(null);

  if (loading) return <div className="flex justify-center py-20"><Spinner /></div>;

  return (
    <div>
      <SectionHeader title="Impact Stats" onAdd={() => setEditing('new')} />
      <div className="grid sm:grid-cols-3 gap-4">
        {rows.map(row => (
          <div key={row.id} className="bg-white rounded-xl border p-4 text-center hover:shadow-sm transition-shadow">
            <div className="text-2xl font-black text-yellow-500 mb-1">{row.value}</div>
            <div className="text-sm font-semibold text-gray-700">{row.label}</div>
            <div className="text-xs text-gray-400 mb-3">Icon: {row.icon_name}</div>
            <div className="flex justify-center gap-2">
              <RowActions onEdit={() => setEditing(row)} onDelete={() => setDeleting(row)} />
            </div>
          </div>
        ))}
      </div>
      {editing && (
        <Modal title={editing === 'new' ? 'New Stat' : 'Edit Stat'} onClose={() => setEditing(null)}>
          <ImpactStatForm initial={editing === 'new' ? undefined : editing} onSave={upsert} onClose={() => setEditing(null)} />
        </Modal>
      )}
      {deleting && <ConfirmDelete label={deleting.label} onConfirm={() => { remove(deleting.id); setDeleting(null); }} onCancel={() => setDeleting(null)} />}
    </div>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

function TestimonialForm({ initial, onSave, onClose }: { initial?: Row; onSave: (v: any) => void; onClose: () => void }) {
  const empty = { id: '', quote: '', attribution: '', is_featured: false };
  const [form, setForm] = useState<any>(initial ? { ...empty, ...initial } : empty);
  const set = (k: string) => (e: any) => setForm((f: any) => ({ ...f, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }));

  return (
    <div className="space-y-4">
      <Field label="Quote"><textarea className={`${textarea} min-h-[120px]`} value={form.quote} onChange={set('quote')} /></Field>
      <Field label="Attribution"><input className={input} value={form.attribution} onChange={set('attribution')} placeholder="— Name or Role" /></Field>
      <label className="flex items-center gap-2 cursor-pointer">
        <input type="checkbox" checked={form.is_featured} onChange={set('is_featured')} className="rounded" />
        <span className="text-sm font-medium text-gray-700">Show on homepage</span>
      </label>
      <div className="flex gap-3 pt-2 justify-end">
        <button onClick={onClose} className="px-4 py-2 rounded-lg border text-sm font-medium hover:bg-gray-50">Cancel</button>
        <button onClick={() => { onSave(form); onClose(); }} className="px-4 py-2 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-gray-900 text-sm font-semibold flex items-center gap-2">
          <Check className="w-4 h-4" /> Save
        </button>
      </div>
    </div>
  );
}

function TestimonialsSection() {
  const { rows, loading, remove, upsert } = useTable('testimonials', 'created_at', false);
  const [editing, setEditing] = useState<Row | null | 'new'>(null);
  const [deleting, setDeleting] = useState<Row | null>(null);

  if (loading) return <div className="flex justify-center py-20"><Spinner /></div>;

  return (
    <div>
      <SectionHeader title="Testimonials" onAdd={() => setEditing('new')} />
      <div className="space-y-3">
        {rows.map(row => (
          <div key={row.id} className="bg-white rounded-xl border p-5 hover:shadow-sm transition-shadow">
            <div className="flex items-start gap-3">
              <div className="text-3xl text-yellow-500 font-serif leading-none">"</div>
              <div className="flex-1">
                <p className="text-gray-700 text-sm leading-relaxed mb-2">{row.quote}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">— {row.attribution}</span>
                  <div className="flex items-center gap-2">
                    {row.is_featured && <Badge label="Featured" color="bg-yellow-100 text-yellow-700" />}
                    <RowActions onEdit={() => setEditing(row)} onDelete={() => setDeleting(row)} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {editing && (
        <Modal title={editing === 'new' ? 'New Testimonial' : 'Edit Testimonial'} onClose={() => setEditing(null)}>
          <TestimonialForm initial={editing === 'new' ? undefined : editing} onSave={upsert} onClose={() => setEditing(null)} />
        </Modal>
      )}
      {deleting && <ConfirmDelete label={`"${deleting.quote?.slice(0, 40)}..."`} onConfirm={() => { remove(deleting.id); setDeleting(null); }} onCancel={() => setDeleting(null)} />}
    </div>
  );
}

// ─── Expansion Settings ───────────────────────────────────────────────────────

function ExpansionSection() {
  const [settings, setSettings] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    supabase.from('expansion_settings').select('*').then(({ data }) => {
      if (data) {
        const map: Record<string, string> = {};
        data.forEach((r: any) => { map[r.key] = r.value; });
        setSettings(map);
      }
      setLoading(false);
    });
  }, []);

  const handleSave = async () => {
    setSaving(true);
    await Promise.all(
      Object.entries(settings).map(([key, value]) =>
        supabase.from('expansion_settings').upsert({ key, value })
      )
    );
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  if (loading) return <div className="flex justify-center py-20"><Spinner /></div>;

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Expansion Settings</h2>
      <div className="bg-white rounded-2xl border p-6 max-w-lg space-y-5">
        <Field label="Progress Amount ($)">
          <input className={input} type="number" value={settings.progress || ''} onChange={e => setSettings(s => ({ ...s, progress: e.target.value }))} />
        </Field>
        <Field label="Goal Amount ($)">
          <input className={input} type="number" value={settings.goal || ''} onChange={e => setSettings(s => ({ ...s, goal: e.target.value }))} />
        </Field>
        <Field label="Impact Video ID (YouTube)">
          <input className={input} value={settings.video_id || ''} onChange={e => setSettings(s => ({ ...s, video_id: e.target.value }))} placeholder="dQw4w9WgXcQ" />
          {settings.video_id && (
            <a href={`https://youtu.be/${settings.video_id}`} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline mt-1 inline-block">
              Preview on YouTube
            </a>
          )}
        </Field>
        <div className="pt-2">
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold px-5 py-2 rounded-lg text-sm transition-colors disabled:opacity-50"
          >
            {saving ? <Spinner /> : saved ? <Check className="w-4 h-4" /> : null}
            {saving ? 'Saving...' : saved ? 'Saved!' : 'Save Settings'}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── nav config ───────────────────────────────────────────────────────────────

const NAV_ITEMS: { section: Section; label: string; icon: React.ComponentType<any> }[] = [
  { section: 'blog', label: 'Blog Posts', icon: FileText },
  { section: 'resources', label: 'Resources', icon: Link2 },
  { section: 'timeline', label: 'Timeline', icon: Clock },
  { section: 'hero', label: 'Hero Slides', icon: Image },
  { section: 'programs', label: 'Programs', icon: Layers },
  { section: 'impact', label: 'Impact Stats', icon: BarChart2 },
  { section: 'testimonials', label: 'Testimonials', icon: MessageSquare },
  { section: 'expansion', label: 'Expansion', icon: Settings },
];

// ─── Dashboard shell ──────────────────────────────────────────────────────────

export default function Dashboard() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<Section>('blog');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleSignOut = async () => {
    await signOut();
    navigate('/admin/login');
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'blog': return <BlogSection />;
      case 'resources': return <ResourcesSection />;
      case 'timeline': return <TimelineSection />;
      case 'hero': return <HeroSection />;
      case 'programs': return <ProgramsSection />;
      case 'impact': return <ImpactSection />;
      case 'testimonials': return <TestimonialsSection />;
      case 'expansion': return <ExpansionSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-56' : 'w-16'} bg-gray-900 text-white flex flex-col transition-all duration-200 flex-shrink-0`}>
        {/* Logo row */}
        <div className="flex items-center gap-3 px-4 h-16 border-b border-white/10">
          <Shield className="w-6 h-6 text-yellow-500 flex-shrink-0" />
          {sidebarOpen && <span className="font-bold text-sm tracking-wide truncate">CMS Dashboard</span>}
          <button onClick={() => setSidebarOpen(o => !o)} className="ml-auto p-1 hover:bg-white/10 rounded">
            {sidebarOpen ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 py-4 space-y-1 px-2 overflow-y-auto">
          {NAV_ITEMS.map(({ section, label, icon: Icon }) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              title={label}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                activeSection === section
                  ? 'bg-yellow-500 text-gray-900'
                  : 'text-white/70 hover:bg-white/10 hover:text-white'
              }`}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              {sidebarOpen && <span className="truncate">{label}</span>}
            </button>
          ))}
        </nav>

        {/* User row */}
        <div className="px-2 pb-4 border-t border-white/10 pt-4">
          {sidebarOpen && (
            <div className="px-3 py-2 text-xs text-white/50 truncate mb-2">{user?.email}</div>
          )}
          <button
            onClick={handleSignOut}
            title="Sign Out"
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-white/70 hover:bg-white/10 hover:text-white transition-colors"
          >
            <LogOut className="w-5 h-5 flex-shrink-0" />
            {sidebarOpen && <span>Sign Out</span>}
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 min-w-0 p-6 md:p-8 overflow-y-auto">
        {renderSection()}
      </main>
    </div>
  );
}

// need ChevronLeft in scope
function ChevronLeft(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}
