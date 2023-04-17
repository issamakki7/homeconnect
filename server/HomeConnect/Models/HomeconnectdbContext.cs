using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace HomeConnect.Models;

public partial class HomeconnectdbContext : DbContext
{
    public HomeconnectdbContext()
    {
    }

    public HomeconnectdbContext(DbContextOptions<HomeconnectdbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Bidding> Biddings { get; set; }

    public virtual DbSet<Creditcard> Creditcards { get; set; }

    public virtual DbSet<House> Houses { get; set; }

    public virtual DbSet<User> Users { get; set; }

    public virtual DbSet<Visit> Visits { get; set; }

    public virtual DbSet<Visitrequest> Visitrequests { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseMySql("server=localhost;database=homeconnectdb;uid=root;pwd=mysqlroot1", Microsoft.EntityFrameworkCore.ServerVersion.Parse("8.0.32-mysql"));

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder
            .UseCollation("utf8mb4_0900_ai_ci")
            .HasCharSet("utf8mb4");

        modelBuilder.Entity<Bidding>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("bidding");

            entity.HasIndex(e => e.HouseId, "houseId");

            entity.HasIndex(e => e.UserId, "userId");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.BiddingDate).HasColumnName("biddingDate");
            entity.Property(e => e.BiddingPrice).HasColumnName("biddingPrice");
            entity.Property(e => e.HouseId).HasColumnName("houseId");
            entity.Property(e => e.IsAcceptedBid).HasColumnName("isAcceptedBid");
            entity.Property(e => e.UserId).HasColumnName("userId");

            entity.HasOne(d => d.House).WithMany(p => p.Biddings)
                .HasForeignKey(d => d.HouseId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("bidding_ibfk_2");

            entity.HasOne(d => d.User).WithMany(p => p.Biddings)
                .HasForeignKey(d => d.UserId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("bidding_ibfk_1");
        });

        modelBuilder.Entity<Creditcard>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("creditcard");

            entity.HasIndex(e => e.CreditCardNumber, "creditCardNumber").IsUnique();

            entity.HasIndex(e => e.UserId, "userId");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.CreditCardNumber)
                .HasMaxLength(100)
                .HasColumnName("creditCardNumber");
            entity.Property(e => e.Cvv).HasColumnName("cvv");
            entity.Property(e => e.ExpirationDate)
                .HasMaxLength(5)
                .HasColumnName("expirationDate");
            entity.Property(e => e.UserId).HasColumnName("userId");

            entity.HasOne(d => d.User).WithMany(p => p.Creditcards)
                .HasForeignKey(d => d.UserId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("creditcard_ibfk_1");
        });

        modelBuilder.Entity<House>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("house");

            entity.HasIndex(e => e.UserId, "userId");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.HouseVrlink)
                .HasMaxLength(700)
                .HasColumnName("houseVRLink");
            entity.Property(e => e.Location)
                .HasMaxLength(500)
                .HasColumnName("location");
            entity.Property(e => e.NbOfRooms).HasColumnName("nbOfRooms");
            entity.Property(e => e.Price).HasColumnName("price");
            entity.Property(e => e.UserId).HasColumnName("userId");

            entity.HasOne(d => d.User).WithMany(p => p.Houses)
                .HasForeignKey(d => d.UserId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("house_ibfk_1");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("user");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Email)
                .HasMaxLength(400)
                .HasColumnName("email");
            entity.Property(e => e.FName)
                .HasMaxLength(100)
                .HasColumnName("fName");
            entity.Property(e => e.LName)
                .HasMaxLength(100)
                .HasColumnName("lName");
            entity.Property(e => e.Pass)
                .HasMaxLength(300)
                .HasColumnName("pass");
            entity.Property(e => e.Username)
                .HasMaxLength(200)
                .HasColumnName("username");
        });

        modelBuilder.Entity<Visit>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("visit");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.VisitType)
                .HasMaxLength(100)
                .HasColumnName("visitType");
        });

        modelBuilder.Entity<Visitrequest>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("visitrequest");

            entity.HasIndex(e => e.HouseId, "houseId");

            entity.HasIndex(e => e.UserId, "userId");

            entity.HasIndex(e => e.VisitId, "visitId");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.HouseId).HasColumnName("houseId");
            entity.Property(e => e.IsAcceptedVisit).HasColumnName("isAcceptedVisit");
            entity.Property(e => e.UserId).HasColumnName("userId");
            entity.Property(e => e.VisitDate).HasColumnName("visitDate");
            entity.Property(e => e.VisitId).HasColumnName("visitId");

            entity.HasOne(d => d.House).WithMany(p => p.Visitrequests)
                .HasForeignKey(d => d.HouseId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("visitrequest_ibfk_2");

            entity.HasOne(d => d.User).WithMany(p => p.Visitrequests)
                .HasForeignKey(d => d.UserId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("visitrequest_ibfk_1");

            entity.HasOne(d => d.Visit).WithMany(p => p.Visitrequests)
                .HasForeignKey(d => d.VisitId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("visitrequest_ibfk_3");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
