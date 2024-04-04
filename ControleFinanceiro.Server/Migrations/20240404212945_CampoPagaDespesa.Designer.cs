﻿// <auto-generated />
using System;
using ControleFinanceiro.Server.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace ControleFinanceiro.Server.Migrations
{
    [DbContext(typeof(ApplicationContext))]
    [Migration("20240404212945_CampoPagaDespesa")]
    partial class CampoPagaDespesa
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "8.0.3");

            modelBuilder.Entity("ControleFinanceiro.Server.Models.Despesa", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("DataCadastro")
                        .HasColumnType("TEXT");

                    b.Property<string>("Descricao")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<bool>("Paga")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("RepetirMensal")
                        .HasColumnType("INTEGER");

                    b.Property<int>("TipoCategoriaId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("TipoPagamentoId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("UsuarioId")
                        .HasColumnType("INTEGER");

                    b.Property<double>("Valor")
                        .HasColumnType("REAL");

                    b.Property<DateTime>("Vencimento")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("TipoCategoriaId");

                    b.HasIndex("TipoPagamentoId");

                    b.HasIndex("UsuarioId");

                    b.ToTable("Despesa");
                });

            modelBuilder.Entity("ControleFinanceiro.Server.Models.TipoCategoria", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("TipoCategoria");
                });

            modelBuilder.Entity("ControleFinanceiro.Server.Models.TipoPagamento", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("TipoPagamento");
                });

            modelBuilder.Entity("ControleFinanceiro.Server.Models.Usuario", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("DataCriacao")
                        .HasColumnType("TEXT");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Senha")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Telefone")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Usuario");
                });

            modelBuilder.Entity("ControleFinanceiro.Server.Models.Despesa", b =>
                {
                    b.HasOne("ControleFinanceiro.Server.Models.TipoCategoria", "TipoCategoria")
                        .WithMany("Despesas")
                        .HasForeignKey("TipoCategoriaId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("ControleFinanceiro.Server.Models.TipoPagamento", "TipoPagamento")
                        .WithMany("Despesas")
                        .HasForeignKey("TipoPagamentoId")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.HasOne("ControleFinanceiro.Server.Models.Usuario", "Usuario")
                        .WithMany("Despesas")
                        .HasForeignKey("UsuarioId")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.Navigation("TipoCategoria");

                    b.Navigation("TipoPagamento");

                    b.Navigation("Usuario");
                });

            modelBuilder.Entity("ControleFinanceiro.Server.Models.TipoCategoria", b =>
                {
                    b.Navigation("Despesas");
                });

            modelBuilder.Entity("ControleFinanceiro.Server.Models.TipoPagamento", b =>
                {
                    b.Navigation("Despesas");
                });

            modelBuilder.Entity("ControleFinanceiro.Server.Models.Usuario", b =>
                {
                    b.Navigation("Despesas");
                });
#pragma warning restore 612, 618
        }
    }
}
